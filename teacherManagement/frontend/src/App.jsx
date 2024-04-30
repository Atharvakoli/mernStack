import React from "react";
import Routers from "./router/Routers";

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routers />
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
