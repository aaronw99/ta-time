import React from 'react';
import '../css/ClassSchedule.css';
import ClassScheduleEntry from './ClassScheduleEntry';

function ClassSchedule() {
  
    return (
      <div className="ClassSchedule">
          <h1>
              SCHEDULE
          </h1>
          <ClassScheduleEntry day="monday"/>
          <ClassScheduleEntry day="tuesday"/>
          <ClassScheduleEntry day="wednesday"/>
          <ClassScheduleEntry day="thursday"/>
          <ClassScheduleEntry day="friday"/>
      </div>
    );
  }

  export default ClassSchedule;