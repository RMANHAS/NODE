//require is used for import
// http is used to create a server
//listen is used for port number
//res.end is mendatery otherwise our server is running cont...
//res.write is used to show the output in server

// const app =require('http');

// app.createServer((req,res)=>{
//     res.write('server is running')
//      res.end();
// },console.log('server is running at port no.:5050')).listen(5050)

//import is used for modern js

// "main": "index.js",
//   "type":"module",
//for import we use "type":"module", in package.json file. if we use require instead of import we delete "type":"module" otherwise we get the error

// import app from 'http'
// import dotenv from'dotenv'
// import colors from 'colors'
// import data from './data.js'

// //configuration for dotenv
// dotenv.config()
// const PORT = process.env.PORT

// app.createServer((_,res)=>

// // app.createServer((req,res)=>
// {
//     // res.write('server is running now')
//     res.write(JSON.stringify(data))
//     res.end();
// },console.log(`our server is running now on port no.: ${PORT.red}`)).listen(PORT);

//file system

// import fs from 'fs'
// // fs.mkdirSync('controller');//mkdir is used to make a file whose name is controller
// fs.writeFileSync('controller/filesysyem.txt','this is file system files')
// const data=fs.readFileSync('controller/filesysyem.txt','utf-8')//readfile is used to read the file
// fs.appendFileSync("controller/filesysyem.txt","happy coding") //append is used to add the data
// const datas=fs.readFileSync('controller/filesysyem.txt','utf-8')

// console.log(data)
// console.log(datas)
// console.log(process.argv)

//express use

import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes.js";

import connectDb from "./config/db.js";
// import {
//   getapiController,
//   postapiController,
//   updateapiController,
//   deleteapiController,
// } from "./controller/apiController.js";

const app = express();


dotenv.config();

app.use(express.json()); //is used to post request and app.use is a middleware

const PORT = process.env.PORT;

//database connection (mongoose)
connectDb();

//this is routes
// app.get("/controller", getapiC ontroller);
// app.post("/postapi", postapiController);
// app.delete("/deleteapi", deleteapiController);

//apiroutes -> to see this middleware go to file apiRoutes.js
app.use("/api/v1", apiRoutes); //middleware is used with name use


app.get("/", (_, res) => {
  res.send("express server is running");
});

app.get("/home", (_, res) => {
  res.send("express server is running at home");
});


//this is used for post api how to add the data by postman to check 
app.post("/add", function (req, res) {
  // res.send('this is add server')
  const { name, email, city } = req.body;
  res.status(200).send({
    success: true,
    message: "user enter successfully",
    user: {
      name: name,
      email: email,
      city: city,
    },
  });
});

app.get("/more", (req, res) => {
  // res.send('this is add server')
  const { name, email, city, address } = req.body;
  res.status(200).send({
    success: true,
    message: "user more  successfully",
    user: {
      name: name,
      email: email,
      city: city,
      address: address,
    },
  });
});

app.get("/abouts", (req, res) => {
  res.send(`
    <input type="text" placeholder="username" value="${req.query.name}"/>
    <button>Submit</button><br/>
    go to home page <a href="/">click</a>
    `);
});

app.delete("/delete", (_, res) => {
  res.send("this is delete server");
});

app.put("/put", (_, res) => {
  res.send("put is used to update the server");
});

app.patch("/patch", (_, res) => {
  res.send("patch is used to update the server with specific value");
});

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
