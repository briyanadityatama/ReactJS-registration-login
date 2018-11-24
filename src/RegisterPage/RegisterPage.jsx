import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullName: "",
        birthPlace: "",
        birthDate: "",
        adress: "",
        uploadPhoto: "",
        marriageStatus: "",
        username: "",
        password: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (
      user.fullName &&
      user.birthPlace &&
      user.birthDate &&
      user.username &&
      user.password
    ) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !user.fullName ? " has-error" : "")
            }
          >
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={user.fullName}
              onChange={this.handleChange}
            />
            {submitted && !user.fullName && (
              <div className="help-block">Full Name is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.birthPlace ? " has-error" : "")
            }
          >
            <label htmlFor="birthPlace">Birth Place</label>
            <input
              type="text"
              className="form-control"
              name="birthPlace"
              value={user.birthPlace}
              onChange={this.handleChange}
            />
            {submitted && !user.birthPlace && (
              <div className="help-block">Birth Place is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.birthDate ? " has-error" : "")
            }
          >
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="text"
              className="form-control"
              name="birthDate"
              value={user.birthDate}
              onChange={this.handleChange}
            />
            {submitted && !user.birthDate && (
              <div className="help-block">Birth Date is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.address ? " has-error" : "")
            }
          >
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={user.address}
              onChange={this.handleChange}
            />
            {submitted && !user.address && (
              <div className="help-block">Address is required</div>
            )}
          </div>
          <div
            className={
              "form-group" +
              (submitted && !user.uploadPhoto ? " has-error" : "")
            }
          >
            <label htmlFor="uploadPhoto">Upload Photo</label>
            <input
              type="text"
              className="form-control"
              name="uploadPhoto"
              value={user.uploadPhoto}
              onChange={this.handleChange}
            />
            {submitted && !user.uploadPhoto && (
              <div className="help-block">Upload Photo is required</div>
            )}
          </div>
          <div
            className={
              "form-group" +
              (submitted && !user.marriageStatus ? " has-error" : "")
            }
          >
            <label htmlFor="marriageStatus">Marriage Status</label>
            <input
              type="text"
              className="form-control"
              name="marriageStatus"
              value={user.marriageStatus}
              onChange={this.handleChange}
            />
            {submitted && !user.marriageStatus && (
              <div className="help-block">Marriage Status is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={this.handleChange}
            />
            {submitted && !user.username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {registering && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}
            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
