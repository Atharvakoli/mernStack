import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../customHook/UseLocalStorageHook";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const { getLocalStorage, setLocalStorage, removeLocalStorage } =
    useLocalStorage("fetchedData");
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const [registerList, setRegisterList] = useState([]);
  const [loginList, setLoginList] = useState([]);
  const [logoutList, setLogoutList] = useState([]);

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [logoutError, setLogoutError] = useState("");

  const [refreshTokenError, setRefreshTokenError] = useState("");

  const removeToken = () => {
    const axiosInstance = axios.create();
    delete axiosInstance.defaults.headers.common["Authorization"];
  };

  const loginRef = useRef();
  const registerRef = useRef();
  const logoutRef = useRef();
  const refreshUserTokenRef = useRef();

  const loginUser = (data) => {
    loginRef.current = data;
    Login();
  };
  const registerUser = (data) => {
    registerRef.current = data;
    register();
  };
  const logoutUser = (data) => {
    logoutRef.current = data;
    logout();
  };
  const refreshUserToken = (data) => {
    refreshUserTokenRef.current = data;
    refreshToken();
  };

  async function Login() {
    setLoginLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/users/login`,
        loginRef.current
      );
      const data = res.data;
      const accessToken = data.data.accessToken;
      setLocalStorage(data);
      setLoginList(data);
      setLoginLoading(false);
      const expiredToken = JSON.parse(atob(token.split(".")[1]));
      tokenRefreshExpiry(expiredToken.exp * 1000);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } catch (e) {
      setLoginError(e);
      setLoginLoading(false);
    }
  }
  async function register() {
    setRegisterLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/users/register`,
        registerRef.current
      );
      const data = res.data;

      setRegisterList(data);
      setRegisterLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setRegisterError(e);
      setRegisterLoading(false);
    }
  }
  async function logout() {
    setLogoutLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/users/logout`,
        null,
        {
          headers: {
            Authorization: `Bearer ${logoutRef.current} `,
          },
        }
      );
      const data = res.data;
      setLogoutLoading(false);
      removeLocalStorage();
      removeToken();
      setLoginList([]);
      setRegisterList([]);
      if (data) {
        setLogoutList(data);
      }
    } catch (e) {
      setLogoutError(e);
      setLogoutLoading(false);
    }
  }
  async function refreshToken() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/refresh-token",
        refreshUserTokenRef.current
      );
      const newAccessToken = response.data.accessToken;
      setLocalStorage(newAccessToken);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      return newAccessToken;
    } catch (error) {
      setRefreshTokenError(`Error refreshing token: ${error}`);
      throw error;
    }
  }
  function tokenRefreshExpiry(expireTime) {
    const timeUntilRefresh = expireTime - Date.now() - 300000;
    setTimeout(refreshUserToken, timeUntilRefresh);
  }

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      try {
        const data = getLocalStorage();
        setLoginList(data);
        setRegisterList(data);
        setLogoutList(data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.data.accessToken}`;
        token = data.data.accessToken;
        if (token) {
          const expiredToken = JSON.parse(atob(token.split(".")[1]));
          if (expiredToken.exp * 1000 > Date.now()) {
            tokenRefreshExpiry(expiredToken.exp * 1000);
            alert("Token as Expired");
          } else {
            removeLocalStorage();
          }
        }
      } catch (error) {
        setLoginError(error);
        setRegisterError(error);
        setLogoutError(error);
      }
    };
    fetchDataFromLocalStorage();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        loginError,
        loginList,
        loginLoading,
        registerList,
        registerError,
        registerLoading,
        logoutList,
        logoutError,
        logoutLoading,
        refreshTokenError,
        loginUser,
        registerUser,
        logoutUser,
        refreshUserToken,
        tokenRefreshExpiry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
