import React from 'react';
import '../css/ClassScheduleEntry.css';
// dummy data

function ClassScheduleEntry(props) {
  let jsonArray = require('../dummy-data/TAs.json');
  const TODAY = props.day;
  let todayTAs = [];

  return (
    <div className="ClassScheduleEntry">
      <p>
        ~ Schedule ~
      </p>
    </div>
  );
}

export default ClassScheduleEntry;