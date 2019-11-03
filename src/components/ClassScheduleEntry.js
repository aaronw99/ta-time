import React from 'react';
import '../css/ClassScheduleEntry.css';
import ClassScheduleEntryData from './ClassScheduleEntryData.js';

function ClassScheduleEntry(props) {
  // database call in real thing
  let jsonArray = require('../dummy-data/TAs.json');
  const TODAY = props.day;
  console.log("today is " + TODAY);
  let todayTAs = [];

  for(var i = 0; i < jsonArray.length; i++) {
    let curTA = jsonArray[i];
    let hours = curTA.hours;
    let specificHours = hours[TODAY];
    console.log(specificHours);
    if(specificHours !== undefined && specificHours != ""){
      let newTA =
        {
          "name":curTA.name,
          "location":curTA.location,
          "hours":specificHours,
        };
      todayTAs.push(newTA);
    }
  }

  let todaySchedule = [];
  for(var j = 0; j < todayTAs.length; j++){
    let curTA = todayTAs[j];
    todaySchedule.push(<ClassScheduleEntryData name={curTA.name} location={curTA.location} hours={curTA.hours} />);
  }

  return (
    <div className="ClassScheduleEntry">
      {todaySchedule}
    </div>
  );
}

export default ClassScheduleEntry;