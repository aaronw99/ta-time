import React from "react";

export const Queue = props => {
  let queue = [];
  let students = [{
    id: 123,
    name: "Becca"

  }, {
    id: 124,
    name: "Andrea"

  }, {
    id: 12,
    name: "Aaron"

  }];
  students.forEach(student => {

    queue.push(
      <tr key={student.id}>
        <th>{student.name}</th>
        <th>{queue.length * 5}</th>
      </tr>
    );
  });

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Estimated wait</th>
      </tr>
      </thead>
      <tbody>
      {queue}
      </tbody>
    </table>
  );

};