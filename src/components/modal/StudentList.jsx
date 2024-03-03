/* eslint-disable react/prop-types */
import { Component } from "react";

export class StudentList extends Component {
  render() {
    const { students } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Group</th>
              <th>Does work ?</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.group}</td>
                <td>{student.doesWork ? "✅" : "❌"}</td>
                <td
                  style={{
                    display: "flex",

                    gap: "8px",
                  }}
                  className=" d-flex gap-"
                >
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
