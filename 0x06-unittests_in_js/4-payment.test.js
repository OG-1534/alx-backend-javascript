// 4-payment.js test cases
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    it('should stub Utils.calculateNumber to always return 10 and log the correct message', function () {
        // Stub Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // console.log spy
        const consoleLogSpy = sinon.spy(console, 'log');

        // Function call
        sendPaymentRequestToApi(100, 20);

        // Check if the stub was called with the correct arguments
        expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;

        // Check if console.log was called with the correct message
        expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;

        // Restore original methods
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
