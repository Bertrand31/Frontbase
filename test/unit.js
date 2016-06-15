const assert = require('chai').assert;
const expect = require('chai').expect;

const util = require('../src/javascripts/utilities');

describe('#utilities', function() {
    describe('#updateViewportDimensions()', function() {
        it('should return viewport dimensions in modern browsers', function(done) {
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
        it('should return viewport dimensions in older browsers', function(done) {
            const fakeWindow = {};
            const fakeDocument = {
                documentElement: {
                    clientWidth: 1920,
                    clientHeight: 1080
                },
                getElementsByTagName(el) { return ['']; }
            };
            const viewport = util.updateViewportDimensions(fakeWindow, fakeDocument);

            assert.isObject(viewport, 'return an object');
            assert.deepEqual(viewport, { width: 1920, height: 1080 }, 'returns correct viewport dimensions');

            done();
        });
        it('should return viewport dimensions in even older browsers', function(done) {
            const fakeWindow = {};
            const fakeDocument = {
                documentElement: {},
                getElementsByTagName(el) { return [{ clientWidth: 1920, clientHeight: 1080 }]; }
            };
            const viewport = util.updateViewportDimensions(fakeWindow, fakeDocument);

            assert.isObject(viewport, 'return an object');
            assert.deepEqual(viewport, { width: 1920, height: 1080 }, 'returns correct viewport dimensions');

            done();
        });
    });
});
