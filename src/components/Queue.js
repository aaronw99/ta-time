import React from "react";

export const Queue = props => {
    let queue = [];

    props.students.forEach(student => {

        queue.push(
            <tr key={student.id}>
                <td>{student.name}</td>
                <td>{queue.length * 5 + 5}</td>
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
                    "color": "#E48AFF",

                    "fontWeight": "bold",
                }}>Name
                </th>

                <th style={{
                    "color": "#E48AFF",

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