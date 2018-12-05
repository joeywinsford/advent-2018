
const calibrate  = (baseFrequency, changes) => {
    if (changes.length === 0)
        return baseFrequency

    const [ head ] = changes
    return parseInt(head)
}

module.exports = {
    calibrate
}