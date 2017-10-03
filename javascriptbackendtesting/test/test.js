const expect = require('chai').expect;
const calculator = require('../lib/calculator');
const util = require('../util/mymodule');
const fs = require('fs');

describe('calculator', () => {
  describe('divide()', () => {
    it('should fail on division by 0', () => {
      expect(() => calculator.divide(1, 0)).to.throw('Attempt to divide by zero');
    });
  });
});


let dir = '';
let file = '';
let ext = 'hej';
before(() => {
  dir = `hello-${Number.parseInt(Math.random() * 1000, 10)}`;
  file = `asd-${Number.parseInt(Math.random() * 1000, 10)}.${ext}`;
  fs.mkdirSync(dir);
  fs.writeFileSync(`${dir}/${file}`, 'fuck');
});

after(() => {
  fs.unlinkSync(`${dir}/${file}`);
  fs.rmdirSync(dir);
});

describe('util', () => {
  it('do its magic', (done) => {
    util(dir, ext, (err, files) => {
      if (err) throw err;
      files.forEach(file => console.log(file));
      done();
    });
  });
});





