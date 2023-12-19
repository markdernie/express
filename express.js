



const express = require('express')
const app = express()
const port = 3000

var element="1"
var dataout = [
    {
      "vendorname":"NHS SHARED BUSINESS SERVICES",
      "vendornumber":791,
      "vendorsite":"London",
      "vsr":79251,
      "invoicenumber":10009058,
      "invoicedate": "11-MAY-2012"
    }
    
 
  ]
var url = require('url');
const fs = require('fs');
var cors = require('cors')
const { time } = require('console')
app.use(cors())
var date = new(Date)
var timestring=date
var os = require("os");
os.hostname();

var count = 0;
var logarray=[]
var newline="\r\n"
//var br="<BR>"

dataout.log= new Array()


app.get('/', (req, res) => {
    count++;
    var time= new (Date)
    dataout.log.push(count)
    date=new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    timestring= new Date().toLocaleTimeString()
    console.log("timestring" +timestring)
    

    console.log("sending dataout:",time,dataout.log,os.hostname()) 
    
   
    res.send(dataout.log)
})


app.listen(port, () => {
    console.log(`listening on port cors on ${port}`)
})
