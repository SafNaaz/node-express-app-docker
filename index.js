const express = require('express')

const app = express()

app.get('/',(req, res)=>
    res.json([{
        name : 'Bob',
        email: 'bob@gmail.com'
    }])
)

app.listen(3000, ()=>{
    console.log("app started on port 3000 succesfully")
})