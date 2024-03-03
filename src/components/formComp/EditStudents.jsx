/* eslint-disable react/prop-types */
import { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.student.firstName,
      lastName: props.student.lastName,
      group: props.student.group,

      doesWork: props.student.doesWork,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, group, doesWork } = this.state;
   
    this.props.editStudent({ firstName, lastName, group, doesWork });
   
    this.props.closeModal();
  };

  render() {
   
    const { showModal, closeModal } = this.props;

    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="group">
              <Form.Label>Group</Form.Label>
              <Form.Control
                type="text"
                name="group"
                value={this.state.group}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="doesWork">
              <Form.Check
                type="checkbox"
                label="Does Work?"
                name="doesWork"
                checked={this.state.doesWork}
                onChange={(e) => this.setState({ doesWork: e.target.checked })}
              />
            </Form.Group>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditStudent;
