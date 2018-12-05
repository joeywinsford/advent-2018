const test = require('tape')

const { calibrate } = require('../src')

test('no changes to frequency', t => {
    const baseFrequency = 0
    
    t.equal(calibrate(baseFrequency, []), 0)
    t.end()
})