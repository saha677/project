const path = require('mongoose')

path.connect('mongodb+srv://sudiparoot:sudipar@cluster0.gg5fc.mongodb.net/roots'  , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = path.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})


module.exports = path