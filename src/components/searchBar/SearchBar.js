import React, { useState } from "react";

import "./SearchBar.scss";

const SearchBar = ({ students, search, setSearch }) => {
  // another piece of state to hold the search matches
  // use the string to filter thru students, making the fetch call
  //
  const handleSearchText = (e) => {
    const searchInput = e.target.value.toLowerCase();
    if (searchInput) {
      let filteredStudents = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return fullName.toLowerCase().includes(searchInput);
      });
      setSearch(filteredStudents);
    }
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search by name..."
        onChange={handleSearchText}
      />
      {console.log(search)}
    </div>
  );
};

export default SearchBar;
