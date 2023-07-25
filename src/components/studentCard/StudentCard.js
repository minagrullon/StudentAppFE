import "./StudentCard.scss";
import { useState } from "react";

import ShowMore from "../showMore/ShowMore";

const StudentCard = ({ student }) => {
  const { firstName, lastName, email, company, skill, pic, grades } = student;

  const [toggle, setToggle] = useState(false);
  // use grades to calculate average

  const average = (
    grades.reduce((acc, curr) => acc + +curr, 0) / grades.length
  ).toFixed(2);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="studentCard">
      <div className="studentCard__profileImage">
        <img src={pic} alt="student profile image" />
      </div>
      <div className="studentCard__studentInfo">
        <div className="studentCard__name">
          {firstName} {lastName}
        </div>
        <div className="studentCard__studentDetail"> Email: {email} </div>
        <div className="studentCard__studentDetail"> Company: {company} </div>
        <div className="studentCard__studentDetail"> Skill: {skill} </div>
        <div className="studentCard__studentDetail"> Average: ${average}% </div>
      </div>
      <div className="studentCard_showMore_button" onClick={handleToggle}>
        {!toggle ? (
          <div className="studentCard_showMore_button__plus">+</div>
        ) : (
          <div className="studentCard_showMore_button__minus">-</div>
        )}
      </div>
      <div className="studentCard_showMore_info">
        {toggle ? <ShowMore grades={grades} toggle={toggle} /> : null}
      </div>
    </div>
  );
};

export default StudentCard;
