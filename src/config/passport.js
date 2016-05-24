const authenticateUser = require('../utils/authenticateUser');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

const User = mongoose.model('User');

/**
 * Seralize the user for outgoing responses.
 *
 * @param {Object} user - The user being seralized.
 * @param {Function} done - The function to call when serialization is done.
 */
const serializeUser = (user, done) => done(null, user._id);

/**
 * Deserialize the user for incoming requests.
 *
 * @param {String} id - The user's id.
 * @param {Function} done - The function to call when the deserialization is done.
 */
const deserializeUser = (id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((error) => done(error, null));
};

/**
 * Config for passport instance.
 *
 * @param {Object} passport - The passport instance to configure.
 */
module.exports = (passport) => {
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
};
