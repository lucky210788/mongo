import React, {Component} from 'react'
import BtnDelete from './BtnDelete/BtnDelete'
import {NavLink} from 'react-router-dom'

class User extends Component {
  render() {
    return (
      <li className="list-group-item row d-flex align-items-center flex-column">
        <NavLink className="row col-12" to={{
          pathname: `/userPage/user/${this.props.user._id}`,
          userId: this.props.user._id
        }}>
          <div className="col-12 text-center"> {this.props.user.firstName} {this.props.user.lastName}</div>
        </NavLink>
        <BtnDelete
          user={this.props.user}
          updateData={this.props.updateData}/>
      </li>
    )
  }
}

export default User
