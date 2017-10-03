const mymodule = require('./mymodule');
const dir = process.argv[2];
const ext = process.argv[3];

const cb = (err, files) => {
  if (err) throw err;
  files.forEach(file => console.log(file));
};

mymodule(dir, ext, cb);
