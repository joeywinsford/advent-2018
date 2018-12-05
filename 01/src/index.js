const fs = require('fs')
const path = require('path')

const calibrate = require('./calibrate')

const frequencyChangesFile = path.join(__dirname, '../input.txt')
fs.readFile(frequencyChangesFile, (err, data) => {
    if (err)
        throw err

    const changes = data.toString().split('\n')
    const result = calibrate(0, changes.slice(0, 995))

    console.log(result)
})