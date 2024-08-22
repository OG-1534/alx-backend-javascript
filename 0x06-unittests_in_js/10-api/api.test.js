const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments', () => {
  it('Returns the correct object', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login', () => {
  it('Returns the correct welcome message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
