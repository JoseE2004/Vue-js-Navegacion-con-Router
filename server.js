const espress = require('express')
const { createApp } = require('vue')

const app = express()

app.use(express.static('dist'))

createApp.listen(8080, () => {
    console.log(`localhost:8080`)
})