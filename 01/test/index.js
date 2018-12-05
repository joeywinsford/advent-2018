const test = require('tape')

const { calibrate } = require('../src')

test('no changes to frequency', t => {
    const baseFrequency = 0

    t.equal(calibrate(baseFrequency, []), 0)
    t.end()
})

test('increase frequency once', t => {
    const baseFrequency = 0
    const frequencyChanges = [ '+1' ]
    t.equal(calibrate(baseFrequency, frequencyChanges), 1)
    t.end()
})

test('decrease frequency once', t => {
    const baseFrequency = 0
    const frequencyChanges = [ '-1' ]
    t.equal(calibrate(baseFrequency, frequencyChanges), -1)
    t.end()
})