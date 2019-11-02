import React from 'react';
import '../css/ClassQueue.css';
import Helping from './Helping.js';

function ClassQueue(props) {

    let TAs = ["Jeremy", "Andrea"];
    let students = ["Aaron", "Becca", "William", "Jeffrey", "Josh"];
    let currentHelpings = [];

    for (var i = 0; i < TAs.length; i++) {
        var curTA = TAs[i];
        var curStudent = students.pop();
        currentHelpings.push(<Helping ta={curTA} currentStudent={curStudent} />);
    }

    return (
      <div className="ClassQueue">
          <h2 className="title">
            {props.class}
          </h2>
          <div className="Helpings">
              {currentHelpings}
          </div>
          <div className="title">
            <h2>
                Next Students
            </h2>
          </div>
      </div>
    );
  }

  export default ClassQueue;