const express = require("express")
const cors = require('cors')


const { port } = require('../config')

const app = express()

//mi codigo
db = require('./utils/database')


app.get('/', (req, res) => {
    res.json({message:'server ok'})
})
db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))
db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
initModels()
app.use(express.json())

app.use('/api/v1/products', productRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})