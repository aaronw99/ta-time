import React from 'react';
import '../css/Helping.css';

function Helping(props) {
    return (
      <div className="Helping">
          <p>
              {props.ta} is helping {props.currentStudent}
          </p>
      </div>
    );
  }

  export default Helping;