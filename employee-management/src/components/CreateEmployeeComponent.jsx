import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.cancel = this.cancel.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    if (employee.firstName === "") return;
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.navigate("/employees");
    });
  };

  cancel() {
    this.props.navigate("/employees");
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Id</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default CreateEmployeeComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  return <CreateEmployeeComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
