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
                <th>{queue.length * 5 + 5}</th>
            </tr>
        );
    });

    return (
        <table
            style={{
                "textAlign": "center",
                "backgroundColor": "#282C34",
                "color": "#69BBFF",
                "borderColor": "#ABB2BF",
                "borderStyle": "solid",
                "borderWidth": "5%",
                "borderRadius": "10px",
                "margin": "auto",
                "width": "50%"

            }}>
            <thead style={{}}>
            <tr>
                <th style={{
                    "fontWeight": "bold",
                }}>Name
                </th>

                <th style={{
                    "fontWeight": "bold",
                }}>Estimated wait
                </th>
            </tr>
            </thead>
            <tbody>
            <tr/>
            {queue}
            </tbody>
        </table>
    );

};