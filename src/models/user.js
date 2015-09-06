'use strict';

const bcrypt = require('bcrypt-as-promised');
const co = require('co');
const createSchema = require('../utils/createSchema');
const mongoose = require('mongoose');

/**
 * The document schema for db.users.
 */
const UserSchema = createSchema({
  // @TODO use an email address instead of a username
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: { type: String, required: true, hideJSON: true }
});

/**
 * Pre-save hook. Encrypt the password if it's new or has been modified.
 *
 * @param {Function} done - The function to call when the hook is complete.
 */
UserSchema.pre('save', function(done) {
  try {
    if (!this.isModified('password')) {
      done();
    }

    co.wrap(this.encryptPassword).call(this)
      .then(function() {
        done();
      })
      .catch(function(error) {
        done(error);
      });
  } catch (error) {
    done(error);
  }
});

/**
 * Encrypt the user instance's password.
 */
UserSchema.methods.encryptPassword = function *() {
  const salt = yield bcrypt.genSalt();
  const hash = yield bcrypt.hash(this.password, salt);
  this.password = hash;
};

/**
 * Determine if the given candidate password matches the user instance's
 * password.
 *
 * @param {String} candidatePassword - The password to match against.
 * @return {Boolean} Whether or not the password matches.
 */
UserSchema.methods.passwordMatches = function *(candidatePassword) {
  return yield bcrypt.compare(candidatePassword, this.password);
};

/**
 * Verify the given password against the user matching the given username.
 *
 * @param {String} username - The username for the user to verify with.
 * @param {String} password - The candidate password to verify.
 * @return {Object} The matching user, if the password was verified.
 */
UserSchema.statics.verifyPassword = function *(username, password) {
  const user = yield this.findOne({ username: username });

  if (!user) {
    throw new Error(`Could not find user with username ${username}.`);
  }

  if (yield user.passwordMatches(password)) {
    return user;
  }

  throw new Error('Password does not match.');
};

mongoose.model('User', UserSchema);
