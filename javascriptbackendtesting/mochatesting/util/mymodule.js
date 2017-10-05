const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, cb) => {
  fs.readdir(dir, (err, files) => {
    if (err)
      return cb(err);
    else
      cb(null, files.filter(file => path.extname(file) === '.' + ext));
  });
};
