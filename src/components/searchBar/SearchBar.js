import React from "react";

import "./SearchBar.scss";

const SearchBar = ({ students, setSearch, setSearchInput }) => {
  const handleSearchText = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearchInput(e.target.value.toLowerCase());
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
    </div>
  );
};

export default SearchBar;
