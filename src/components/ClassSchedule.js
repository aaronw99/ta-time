import React from 'react';
import '../css/ClassSchedule.css';
import ClassScheduleEntry from './ClassScheduleEntry';

function ClassSchedule() {
  
    return (
      <div className="ClassSchedule">
        <div className="inner">
          <h1 className="schedule_txt">
              S C H E D U L E
          </h1>
          <ClassScheduleEntry day="monday"/>
          <ClassScheduleEntry day="tuesday"/>
          <ClassScheduleEntry day="wednesday"/>
          <ClassScheduleEntry day="thursday"/>
          <ClassScheduleEntry day="friday"/>
        </div>
      </div>
    );
  }

  export default ClassSchedule;