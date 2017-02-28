const assert = require('assert'),
    dt = require('../index');

describe('datetime-utc', function () {
    describe('#local()', function () {
        it('should return local date (all parts < 10)', function () {
            const expected = '2017-01-01T00:00:00.000';
            const actual = dt.local(new Date(2017, 0, 1, 0, 0, 0));
            assert.equal(expected, actual);
        });

        it('should return local date (all parts >= 10 and ms < 100)', function () {
            const expected = '2017-10-10T10:10:10.011';
            const actual = dt.local(new Date(2017, 9, 10, 10, 10, 10, 11));
            assert.equal(expected, actual);
        });

        it('should return local date (ms >= 100)', function () {
            const expected = '2017-10-10T10:10:10.111';
            const actual = dt.local(new Date(2017, 9, 10, 10, 10, 10, 111));
            assert.equal(expected, actual);
        });
    });
    describe('#utc()', function () {
        it('should return UTC date (all parts < 10)', function () {
            const expected = '2017-01-01T00:00:00.000';
            const actual = dt.utc(new Date(Date.UTC(2017, 0, 1, 0, 0, 0)));
            assert.equal(expected, actual);
        });

        it('should return UTC date (all parts >= 10 and ms < 100)', function () {
            const expected = '2017-10-10T10:10:10.011';
            const actual = dt.utc(new Date(Date.UTC(2017, 9, 10, 10, 10, 10, 11)));
            assert.equal(expected, actual);
        });

        it('should return UTC date (ms >= 100)', function () {
            const expected = '2017-10-10T10:10:10.111';
            const actual = dt.utc(new Date(Date.UTC(2017, 9, 10, 10, 10, 10, 111)));
            assert.equal(expected, actual);
        });
    });
});
