import { useState, useEffect } from "react";

import StudentCard from "../studentCard/StudentCard";

import SearchBar from "../searchBar/SearchBar";

import Loading from "../loading/Loading";

import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data from https://api.hatchways.io/assessment/students
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => {
        // update hook with data
        setStudents(data.students);
      });
  }, []);

  return (
    <div className="studentCardList">
      <SearchBar
        students={students}
        search={search}
        setSearch={setSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {/* map through data  */}
      {loading ? (
        <Loading
          loading={loading}
          setLoading={setLoading}
          students={students}
        />
      ) : search.length > 0 && searchInput.length > 0 ? (
        search.map((student) => {
          return <StudentCard student={student} key={student.id} />;
        })
      ) : searchInput.length > 0 && !search.length ? (
        <div className="studentCardList__search_no_results">No results </div>
      ) : (
        students.map((student) => {
          // render a student card for every student
          return <StudentCard student={student} key={student.id} />;
        })
      )}
    </div>
  );
};

export default StudentCardList;
