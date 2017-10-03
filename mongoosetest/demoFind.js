require('./connection.js');

// if our user.js file is at app/models/user.js
const User = require('./models/user');



// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

User.findById('59cb62d71419153674331fdb', function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});
