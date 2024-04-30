import React from "react";

import StudentSearch from "../StudentSearch";

const Search = ({ students }) => {
  return (
    <>
      <StudentSearch students={students} />
    </>
  );
};

export default Search;
