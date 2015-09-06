const axios = require('axios');


const ROOT_PATH = '/auth/signup';

/**
 * A collection of signup-based API methods.
 */
const SignupAPI = {
  /**
   * Make a signup request with the given user object.
   *
   * @param {Object} user - The user to sign up with.
   */
  signup(user) {
    return axios.post(`${ROOT_PATH}`, user);
  }
};

module.exports = SignupAPI;
