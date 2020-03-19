import React, {Component} from 'react';
import {apiService} from '../../../servise/apiService';
import {NavLink} from 'react-router-dom';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleInput = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email} = this.state;
    apiService.createUser({firstName, lastName, email})
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
                     to="/">
              Back
            </NavLink>
          <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateUser
