import "../Style/Search.css";
import { useEffect, useState } from "react";

const Search = () => {

  const [timeVal, setTimeVal] = useState(new Date());
  const [mins, setMins] = useState();
  const [hours, setHours] = useState();
    setInterval(() => {
      let curr = new Date();
      setTimeVal(curr);
      setHours(timeVal.getHours()*60);
      setMins(timeVal.getMinutes());
    }, 60000);
  var total = 1440;
    return (
      <div className="progressbar-container">
      <div
          className="progressbar-visual-container"
          style={{ width: "288px" }}>
          <div
              className="progressbar-visual"
              style={{ width: `${((hours+mins)/1440)*288}px` }}>
          </div>
      </div>
      {Math.round(100-((hours+mins)/14.40))}% Left
  </div>
  );
};

export default Search;
