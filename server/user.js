const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
var studentSchema =new mongoose.Schema ({
    email:String,
    password:String,
    firstName: String,
    lastName: String,
    school: String,
    age: Number,
    role:String,
    remainingtime:Number,

});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
studentSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
studentSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});
var Student = mongoose.model('Students', studentSchema, 'students');


module.exports = Student;