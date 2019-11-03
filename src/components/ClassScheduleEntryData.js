import React from 'react';

function ClassScheduleEntryData(props) {
    return (
      <div className="ClassScheduleEntryData">
          <p>
            {props.name} {props.location} {props.hours}
          </p>
      </div>
    );
  }

export default ClassScheduleEntryData;