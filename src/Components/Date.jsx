import "../Style/Date.css";
import { useEffect, useState } from "react";

const Date = () => {
    let timeVal = new window.Date();

    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    return (
    <div className="date-container">
        <h1>{`${days[timeVal.getDay()]}, ${months[timeVal.getMonth()]} ${timeVal.getDate()}`}</h1>
        
    </div>
  );
};

export default Date;
