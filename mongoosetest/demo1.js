require('./connection.js');

// if our user.js file is at app/models/user.js
const User = require('./models/user');

// create a new user called chris
let chris = new User({
  name: 'Peter quill',
  username: 'starlord55',
  password: 'password'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function (err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function (err) {
  if (err) throw err;

  console.log('User saved successfully!');
});


