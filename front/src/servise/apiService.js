import axios from 'axios'

const baseURL = 'http://localhost:8080/';

export class apiService {
  static getUser () {
    return axios.get(`${baseURL}users`)
      .catch(error => {
        console.log('Error', error);
      })
  }

  static createUser (currentUser) {
    return axios.post(`${baseURL}user`, {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      address: currentUser.address
    })
  }

  static deleteUser (id) {
    return axios.delete(`${baseURL}user/${id}`)
  }

  static detailsUser (id) {
    return axios.get(`${baseURL}user/${id}`)
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log('Strange Error', error.message)
        }
        console.log(error.config)
      })
  }

  static editUser (id, currentUser) {
    return axios.put(`${baseURL}user/${id}`, {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      address: currentUser.address
    })
  }
}
