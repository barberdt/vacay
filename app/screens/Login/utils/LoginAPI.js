import { post } from 'axios';


const ROOT_PATH = '/auth/login';

/**
 * Log into the application.
 *
 * @param {String} username - The username to log in with.
 * @param {String} password - The password to log in with.
 * @return {Promise} A promise that will resolve on successful login.
 */
export function login(username, password) {
  return post(`${ROOT_PATH}`, { username, password });
}
