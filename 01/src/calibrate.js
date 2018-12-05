
const calibrate  = (baseFrequency, changes) => {
    if (changes.length === 0)
        return baseFrequency

    const [ change, ...tail ] = changes
    return calibrate(baseFrequency + parseFrequencyChange(change), tail)
}

const parseFrequencyChange = input => {
    if (input === '')
        return 0
        
    return parseInt(input)
}

module.exports = calibrate