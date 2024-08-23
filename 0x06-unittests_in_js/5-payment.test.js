const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    // Set up the spy before each test using beforeEach hook
    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    // Restore the spy after each test using afterEach hook
    afterEach(function () {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and be called once when called with 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" and be called once when called with 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
