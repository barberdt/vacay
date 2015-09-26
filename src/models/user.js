'use strict';

const bcrypt = require('bcrypt-as-promised');
const co = require('co');
const createSchema = require('../utils/createSchema');
const mongoose = require('mongoose');


const emailRe = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

/**
 * The document schema for db.users.
 */
const UserSchema = createSchema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRe,
    lowercase: true
  },
  first: { type: String, required: true, maxlength: 35 },
  last: { type: String, required: true, maxlength: 35 },
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
      return;
    }

    co.wrap(this.encryptPassword).call(this)
      .then(() => done())
      .catch((error) => done(error));
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
 * Verify the given password against the user matching the given email.
 *
 * @param {String} email - The email for the user to verify with.
 * @param {String} password - The candidate password to verify.
 * @return {Object} The matching user, if the password was verified.
 */
UserSchema.statics.verifyPassword = function *(email, password) {
  const user = yield this.findOne({ email });

  if (!user) {
    throw new Error(`Could not find user with email ${email}.`);
  }

  if (yield user.passwordMatches(password)) {
    return user;
  }

  throw new Error('Password does not match.');
};

mongoose.model('User', UserSchema);
