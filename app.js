const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 80;

//  Express specific Stuff
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded());


// pug Specfic Stuff
app.set('view engine', 'pug') // set the template engine as pug
app.set('views',path.join(__dirname,'views')) // set the view directory

//  endpoint
app.get("/", (req, res)=>{
    const con = "This is the best content on the internet "
    const params = {'title':'Pubg is the best game ',"content": con}
     res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    More = req.body.More

    let outputToWrite = `the name of the client is ${name}, ${age} years old,${gender},residing at
    ${address},More about him/her: ${More}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message':'Your form has been successfully'}
    res.status(200).render('index.pug',params);
})


// Strat the server 
app.listen(port, ()=>{
console.log(`The application strated successfully on port ${port}`)
});