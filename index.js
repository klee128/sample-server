const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log('say hay')
    res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))