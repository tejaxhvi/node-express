const express = require ('express')
const app = express()
const cors = require('cors');

let reqcount = 0 ; 

function middleware(req, res , next) {
    reqcount = reqcount + 1; 
    let time = new Date();                  // this is inbuilt feautres of node javascript actually this is class 
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    console.log(`This is ${reqcount}rd request hit at ${hours}:${minutes}:${seconds}`);   //using () instead of {} never forget ur mistakes
    console.log(`The Host is ${req.hostname}`)
    
    next();  // this function is responsible to pass out to next middlewares or the end point
}

app.post('/sum',function (req , res ) {
    let a = parseInt(req.body.a);  // can't understand this req.query.a,b need to read docs 
    let b = parseInt(req.body.b);

    res.json({                  // docs 
        ans : a + b 
    })

})

app.post('/calculus', function (req, res) {
    let value1 = req.body.val
    let value2 = req.body.val2

    res.redirect('https://www.google.com')

})


function multiply(req, res , next) {
    let a = parseInt(req.body.a); // use query instead of body.x , this is post req not get
    let b = parseInt(req.body.b);

    res.json({
        ans : a * b
    })
    next();
}
//app.use(middleware);// all the GET functions below this will go through the 'middleware' specified here.
//app.use(cors())

app.post('/multiply', multiply);             // post req accept the body(json) from user or other service(postman/hoppscotch.io)
// app.get('/login' , function (req,res){

//     let name = req.query.name;
//     let id = req.query.id;

//     // res.format({
//     //     text: function () {
//     //       res.send('hey (modified)')
//     //     },
      
//     //     html: function () {
//     //       res.send('<p>this is html tags </p>')
//     //     }
//     //   })
//       //res.location('http://google.com')
//       res.redirect('/foo/bar')
      
//})


app.listen(3001);