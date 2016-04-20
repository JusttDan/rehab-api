const assert = require('chai').assert

//test assertion
describe('Array', () => {
    describe('#indexOf()', () => {
        it('Should return -1 when the value is not present', () => {
            assert.equal(-1, [1,2,3].indexOf(5))
            assert.equal(-1, [1,2,3].indexOf(0))
        })
    })
})
