// 3-payment.js test cases

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with the correct arguments and log the result', function () {
        // A spy for Utils.calculateNumber is created
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        
        // Stub console.log to prevent actual logging during tests
        const consoleLogStub = sinon.stub(console, 'log');

        // Call function
        sendPaymentRequestToApi(100, 20);
        
        // Check if spy was called with the correct args
        expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;

        // Check if correct message is logged
        expect(consoleLogStub.calledOnceWith('The total is: 120')).to.be.true;

        // Restore original methods
        calculateNumberSpy.restore();
        consoleLogStub.restore();
    });
});
