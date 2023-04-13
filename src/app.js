const express = require("express")
const { port } = require('../config')

const app = express()

//mi codigo
const productRouter = require('./products/products.router')
const db = require('./utils/database')
// db = require('./utils/database')

app.get('/', (req, res) => {
    res.json({message:'server ok'})
})
db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))

    
app.use(express.json())

app.use('/api/v1/products', productRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})