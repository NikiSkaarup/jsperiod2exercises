const chai = require('chai');
const request = require('request');
const expect = require('chai').expect;
const http = require('http');
let app = require('../app');
let server;
const TEST_PORT = 4567;

before((done) => {
  server = http.createServer(app);
  server.listen(TEST_PORT, () => {
    done();
  });
});

after((done) => {
  server.close();
  done();
});

describe('POST: /api/joke ', () => {
  var options = {
    url: `http://localhost:${TEST_PORT}/api/joke`,
    method: 'POST',
    json: true,
    body: { joke: 'Much delete original version of the tests' }
  };

  it('should add joke from options', (done) => {
    request(options, (error, res, body) => {
      var addedJoke = body.joke;
      console.log(body);
      expect(addedJoke).to.be.equal(options.body.joke);
      done();
    });
  });
});

describe('GET: /api/joke/random ', () => {
  var options = {
    url: `http://localhost:${TEST_PORT}/api/joke/random`,
    method: 'GET',
    json: true
  }

  it('should get a random joke', (done) => {
    request(options, (error, res, body) => {
      expect(res.body.length).to.be.greaterThan(0);
      done();
    });
  })
});

describe('GET: /api/jokes ', () => {
  var options = {
    url: `http://localhost:${TEST_PORT}/api/jokes`,
    method: 'GET',
    json: true
  }

  it('should get all the jokes', (done) => {
    request(options, (error, res, body) => {
      var countJokes = res.body.length;
      expect(countJokes).to.be.equal(4);
      done();
    });
  })
});
