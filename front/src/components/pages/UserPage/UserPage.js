import React, {Component} from 'react';
import {apiService} from '../../../servise/apiService';
import {NavLink} from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    const {location} = this.props;
    apiService.detailsUser(location.userId)
      .then((res) => {
          this.setState({user: res.data})
        }
      ).catch((error) => console.log(error))
  }

  render() {
    return (
      <div className="container pt-2">
        <div className="card col-6 mb-3 ml-auto mr-auto">
            <div className="card-body">
              <div className='card-title'>First name:</div>
              <div className='card-text mb-3'>{this.state.user.firstName}</div>
              <div className='card-title'>Last name:</div>
              <div className='card-text mb-3'>{this.state.user.lastName}</div>
              <div className='card-title'>Email:</div>
              <div className='card-text'> {this.state.user.email}</div>
            </div>
        </div>
        <div>
          <NavLink className='btn btn-secondary mr-2'
                   to="/">Back
          </NavLink>
          <NavLink className='btn btn-success'
                   to={{
                     pathname: `/change/user/${this.state.user._id}`,
                     user: this.state.user
                   }}>Change
          </NavLink>
        </div>
      </div>
    )
  }
}

export default UserPage
