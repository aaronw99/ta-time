import React from 'react';
import '../css/ClassScheduleEntryData.css';

function ClassScheduleEntryData(props) {
    return (
      <div className="flexContainer">
        <div className="row">
            {props.name} 
        </div>
        <div className="row">
            {props.location}
        </div>
        <div className="row">
             {props.hours}
        </div>
      </div>
    );
  }

export default ClassScheduleEntryData;