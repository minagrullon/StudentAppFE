import React from "react";

import "./Showmore.scss";

const ShowMore = ({ grades }) => {
  return (
    <div className="showMore_div">
      {grades.map((grade, i) => {
        return (
          <div key={i} className="showMore_div__test">
            Test {i}: {grade}%
          </div>
        );
      })}
    </div>
  );
};

export default ShowMore;
