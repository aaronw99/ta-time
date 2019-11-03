import React from 'react';
import '../css/Helping.css';

function Helping(props) {
    return (
      <div className="Helping">
          <p>
            <span>
              <span className="ta"><b>{props.ta} </b></span>is helping <span className="student"><b>{props.currentStudent}</b>
              </span>
          </span>
          </p>
      </div>
    );
  }

  export default Helping;