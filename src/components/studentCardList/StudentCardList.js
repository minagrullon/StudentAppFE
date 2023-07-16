import { useState, useEffect } from "react";

import StudentCard from "../studentCard/StudentCard";

import SearchBar from "../searchBar/SearchBar";

import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState([]);

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
      <SearchBar students={students} search={search} setSearch={setSearch} />
      {/* map through data  */}
      {search.length > 0
        ? search.map((student) => {
            return <StudentCard student={student} />;
          })
        : students.map((student) => {
            // render a student card for every student
            return <StudentCard student={student} />;
          })}
    </div>
  );
};

export default StudentCardList;
