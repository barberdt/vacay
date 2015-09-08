import { post, get } from 'axios';


const ROOT_PATH = '/api/trips';

/**
 * Create a new trip.
 *
 * @param {Object} trip - The trip to create.
 * @return {Promise} A promise that will resolve on save success.
 */
export function create(trip) {
  return post(`${ROOT_PATH}`, trip);
}

/**
 * Load the trips.
 *
 * @return {Promise} A promise that will resolve on load success.
 */
export function load() {
  return get(`${ROOT_PATH}`);
}
