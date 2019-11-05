import React from 'react';
import '../css/ClassQueue.css';
import Helping from './Helping.js';
import {Queue} from './Queue.js';

function ClassQueue(props) {
    // GET list of TAs
    // GET queue of students
    let jsonStudents = require('../dummy-data/students');

    let TAs = ["Jeremy", "Andrea"];
    let students = ["Aaron", "Becca", "William", "Jeffrey", "Josh"];
    let currentHelpings = [];

    for (var i = 0; i < TAs.length; i++) {
        var curTA = TAs[i];
        var curStudent = students.pop();
        currentHelpings.push(<Helping ta={curTA} currentStudent={curStudent}/>);
    }
    // pass props into Queue
    return (
        <div className="ClassQueue">
            <div className="Helpings">
                {currentHelpings}
                <h2 className="title">
                    Next Students
                </h2>
                {/* Pass students as prop into queue; queue handles estimated time */}
                <Queue students={jsonStudents}/>
            </div>

        </div>
    );
}

export default ClassQueue;