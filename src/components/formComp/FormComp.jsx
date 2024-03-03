import { Component } from "react";
import "./FormComp.scss";
import { ButtonGroup } from "react-bootstrap";
import StudentList from "../modal/StudentList";
import AddStudents from "./AddStudents";

export class FormComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          firstName: "Jeck",
          lastName: "Smith",
          group: "React 45",
          doesWork: false,
        },
        {
          id: 2,
          firstName: "Tom",
          lastName: "Black",
          group: "React 50",
          doesWork: true,
        },
        {
          id: 3,
          firstName: "John",
          lastName: "Doe",
          group: "React 38",
          doesWork: false,
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  closeAddModal = (e) => {
    e.preventDefault();

    this.setState({ addModal: false });
  };

  openAddModal = (e) => {
    e.preventDefault();
    this.setState({ addModal: true });
  };

  handleAdd = () => {
    // Add your logic for adding a new student here
    // For example:
    // 1. Create a new student object
    // 2. Push it to the students array
    // 3. Close the modal
    // Implement this according to your requirement
    this.closeAddModal();
  };

  render() {
    const { students, addModal } = this.state;
    const { closeAddModal, openAddModal } = this;

    return (
      <div className="form_Comp">
        <div className="container my-3">
          <form className=" ">
            <ButtonGroup className="w-100">
              <input
                type="text"
                placeholder="Enter info"
                className="form-control"
              />
              <select name="filter" id="filter" className="form-select w-auto">
                <option value="All">All</option>
                <option value="React N45">React N45</option>
                <option value="React N38">React N38</option>
                <option value="React N52">React N52</option>
                <option value="React N50">React N50</option>
              </select>
              <button
                onClick={openAddModal}
                className="btn btn-outline-success w-auto"
              >
                Add student
              </button>
            </ButtonGroup>
          </form>
          <StudentList students={students} />
          <AddStudents addModal={addModal} closeAddModal={closeAddModal} />
        </div>
      </div>
    );
  }
}

export default FormComp;
