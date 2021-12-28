import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeByID(this.state.id).then((res) => {
      this.setState({
        employee: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee First Name : </label>
              <div style={{ marginLeft: "10px" }}>
                {this.state.employee.firstName}
              </div>
            </div>
            <div className="row">
              <label> Employee Last Name : </label>
              <div style={{ marginLeft: "10px" }}>
                {this.state.employee.lastName}
              </div>
            </div>
            <div className="row">
              <label> Employee Email Address : </label>
              <div style={{ marginLeft: "10px" }}>
                {this.state.employee.emailId}
              </div>
            </div>
            <div className="row">
              <button
                className="btn btn-info"
                onClick={() => {
                  this.props.navigate("/employees");
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default ViewEmployeeComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let params = useParams();
  return (
    <ViewEmployeeComponent {...props} params={params} navigate={navigate} />
  );
}

export default WithNavigate;
