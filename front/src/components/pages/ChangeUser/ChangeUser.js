import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {apiService} from '../../../servise/apiService';

class ChangeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.location.user?.firstName,
      lastName: this.props.location.user?.lastName,
      email: this.props.location.user?.email
    }
  }

  handleInput = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  };

  onSubmit = async (e) => {
    const {firstName, lastName, email} = this.state;
    const {location} = this.props;
    e.preventDefault();
    await apiService.editUser(location.user?._id, {
      firstName,
      lastName,
      email
    })
      .catch((error) => console.log(error));
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    })
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <legend>Edit user</legend>
          <div className="form-group">
            <label>First name</label>
            <input
              required
              name="firstName"
              className="form-control"
              type="text"
              value={this.state.firstName}
              onChange={this.handleInput}
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              required
              name="lastName"
              className="form-control"
              type="text"
              value={this.state.lastName}
              onChange={this.handleInput}
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              required
              pattern='^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$'
              name="email"
              className="form-control"
              type="email"
              value={this.state.email}
              onChange={this.handleInput}
              placeholder="Enter email"
            />
          </div>
          <div>
            <NavLink className='btn btn-secondary mr-2'
                     to="/">Back
            </NavLink>
            <button className='btn btn-success'>Ok</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ChangeUser
