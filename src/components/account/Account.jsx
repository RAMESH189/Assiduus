import React, { useState } from "react";
import "./account.css";
import LineChart from "./LineChart";

export default function Account({randomData}) {


  const [data, setData] = useState([]);
  const [month, setMonth] = useState([]);

 const manageDataHandler = (event) => {
    setData(event.target.value);
  };

  const monthHandler = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div className="Account">
      <div className="AccountWrapper">
        <div className="AccountTop">
          <div className="accountTopleft">
            <span className="headingAccount">Checking account</span>
          </div>
          <div className="accountTopRight">
            <div className="topDropdowns">
              <div className="dropdownOne">
                <select
                  value={data}
                  onChange={manageDataHandler}
                  id="manage"
                  className="dropdown1"
                >
                  <option>manage</option>
                 <option>1000</option>
                 <option>2000</option>
                 <option>3000</option>
                 <option>4000</option>
                 <option>5000</option>
                 <option>6000</option>
               
                </select>
              </div>
              <div className="dropdownTwo">
                <select
                  value={month}
                  onChange={monthHandler}
                  id="month"
                  className="dropdow2"
                >
                 <option>months</option>
                 <option>January</option>
                 <option>February</option>
                 <option>March</option>
                 <option>April</option>
                 <option>May</option>
                 <option>June</option>
                 <option>July</option>
                 <option>August</option>
                 <option>September</option>
                 <option>October</option>
                 <option>November</option>
                 <option>December</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="AccountCenter">
          <LineChart data={data} month={month} randomData={randomData} />
        </div>
      </div>
    </div>
  );
}
