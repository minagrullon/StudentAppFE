import { useEffect } from "react";

import "./Loading.scss";

const Loading = ({ loading, setLoading, students }) => {
  useEffect(() => {
    if (!students) setLoading(true);
    else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading, setLoading, students]);

  return <div className="loadingDiv">Loading...</div>;
};

export default Loading;
