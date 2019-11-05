import React from 'react';
import '../css/App.css';

import ClassQueue from "./ClassQueue";
import ClassSchedule from "./ClassSchedule";

function App() {
  let curDay = 'monday';
  let curClass = 'CS2201';

  return (
    <div className="App">
      <header className="title">
        <h1>
          T.A. TIME
        </h1>
      </header>
      <div>
        {/* list of classes for user to select  */}
        <div class="tab">
            <h3 id="topHeading">
                <select>
                    <option value="CS1101"> CS1101</option>
                    <option value="CS2201">CS2201</option>
                    <option value="CS3251">CS3251</option>
                </select>
                {/* <button id = "toggle"> View Schedule</button>
                <button id = "toggle"> View Queue</button> */}
            </h3>
        </div>

        {/* schedule and queue loaded based on class and day  */}
        <div className="appFlexContainer">
          <div className="appRow">
            {/* should take a prop that is the current class */}
            <ClassSchedule/>
          </div>
          <div className="appRow">
            {/* takes props, current class and current day */}
            <ClassQueue/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
