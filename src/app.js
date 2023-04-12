const express = require("express")
const cors = require('cors')


const { port } = require('../config')

const app = express()

//mi codigo
db = require('./utils/database')


app.get('/', (req, res) => {
    res.json({message:'server ok'})
})


app.use('/api/v1/products', productRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})