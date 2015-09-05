const axios = require('axios');


const ROOT_PATH = '/login';

/**
 * A collection of login-based API methods.
 */
const LoginAPI = {
  /**
   * Log into the application.
   *
   * @param {String} username - The username to log in with.
   * @param {String} password - The password to log in with.
   * @return {Promise} A promise that will resolve on successful login.
   */
  login(username, password) {
    return axios.post(`${ROOT_PATH}`, { username, password });
  }
};

module.exports = LoginAPI;
