/* eslint-disable react/prop-types */
import { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      group: "",
      doesWork: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, group, doesWork } = this.state;

    this.props.addStudent({ firstName, lastName, group, doesWork });

    this.props.closeAddModal();
  };

  render() {
    const { addModal, closeAddModal } = this.props;

    return (
      <Modal show={addModal} onHide={closeAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add to info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group id="firstName">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="group">
              <Form.Label>Group</Form.Label>
              <Form.Control
                as="select"
                name="group"
                id="group"
                value={this.state.group}
                onChange={this.handleChange}
              >
                <option value="React N45">React N45</option>
                <option value="React N38">React N38</option>
                <option value="React N52">React N52</option>
                <option value="React N50">React N50</option>
              </Form.Control>
            </Form.Group>
            <Form.Group id="doesWork">
              <Form.Check
                style={{
                  margin: "8px",
                  marginLeft: "0",
                }}
                type="checkbox"
                label="Does work?"
                name="doesWork"
                checked={this.state.doesWork}
                onChange={(e) => this.setState({ doesWork: e.target.checked })}
              />
            </Form.Group>
            <Button
              style={{
                margin: "8px",
                marginLeft: "0",
              }}
              variant="secondary"
              onClick={closeAddModal}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add student
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddStudents;
