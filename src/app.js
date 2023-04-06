const express = require("express")
const cors = require('cors')



const { port } = require('../config')

const app = express()

//mi codigo
app.get('/', (req, res) => {
    res.json({message:'server ok'})
})




app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})