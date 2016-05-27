import { post } from 'axios';

const ROOT_PATH = '/auth/signup';

/**
 * Make a signup request with the given user object.
 *
 * @param {Object} user - The user to sign up with.
 */
export function signup(user) {
  return post(`${ROOT_PATH}`, user);
}
