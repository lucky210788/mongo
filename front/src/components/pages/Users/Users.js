import React, {Component, Fragment} from 'react';
import {apiService} from '../../../servise/apiService';
import User from './User/User';
import {NavLink} from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  updateData = (value) => {
    this.setState({users: value})
  };

  getUsers = () => {
    apiService.getUser().then(res => {
      console.log(res);
      this.setState({
        showSpinner: false,
        users: res.data
      })
    }).catch(() => {
      this.setState({
        showSpinner: false
      })
    })
  };

  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <Fragment>
        <div className="row align-items-center flex-column mt-5">
          <h3 className="mb-2">List</h3>
            <ul className="list-group col-3">{
              this.state.users.map(user => {
                return (
                  <User user={user}
                        key={user._id}
                        updateData={this.updateData}
                  />
                )
              })
            }</ul>
          <NavLink className="btn btn-outline-primary mt-2" to="/create">
            Add User
          </NavLink>
        </div>
      </Fragment>
    )
  }
}

export default Users
