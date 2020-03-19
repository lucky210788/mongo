import React from 'react';
import {apiService} from '../../../../../servise/apiService';

const BtnDelete = props => {
  const deleteUser = () => {
    apiService.deleteUser(props.user._id)
      .then(() => {
        apiService.getUser().then(res => {
          props.updateData(res.data)
        })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

  return (
    <button type="button"
            className="btn btn-danger"
            onClick={deleteUser}>
      Delete
    </button>
  )
};

export default BtnDelete
