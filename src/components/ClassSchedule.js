import React from 'react';
import '../css/ClassSchedule.css';

function ClassSchedule() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let times = ["10:00", "12:00"]
    return (
      <div className="ClassSchedule">
          <p>
              ~ Schedule ~
          </p>
      </div>
    );
  }

  export default ClassSchedule;