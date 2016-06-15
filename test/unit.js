const assert = require('chai').assert;
const expect = require('chai').expect;

const util = require('../src/javascripts/utilities');

describe('#utilities', function() {
    describe('#updateViewportDimensions()', function() {
        it('should return viewport dimneions', function(done) {
            const fakeWindow = {
                innerWidth: 1920,
                innerHeight: 1080
            };
            const fakeDocument = {
                documentElement() {},
                getElementsByTagName(el) { return ['']; }
            };
            const viewport = util.updateViewportDimensions(fakeWindow, fakeDocument);

            assert.isObject(viewport, 'return an object');
            assert.deepEqual(viewport, { width: 1920, height: 1080 }, 'returns correct viewport dimensions');

            done();
        });
    });
});
