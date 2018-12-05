
const calibrate  = (baseFrequency, changes) => {
    if (changes.length === 0)
        return baseFrequency

    const [ frequencyChange, ...tail ] = changes
    return calibrate(baseFrequency + parseInt(frequencyChange), tail)
}

module.exports = {
    calibrate
}