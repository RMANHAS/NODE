import { MongoClient } from 'mongodb' //here we import mongodb
import userModel from '../model/userModel.js';

export const getapiController =async (req, res) => {
  // res.send("this is delete server");
  try {
    const users =await userModel.find()
    res.status(200).send({
      success:true,
      message:"list of all users",
      users
    })
  } catch (error) {
    console.log(error)
  }
};

export const postapiController = async(req, res) => {
  // res.send("this is post api is working ");
  try {
    const {name,email,phone}=req.body;

    if(!name) 
    return res.status(404).send({message:"name is required"})

    else if (!email)
    return res.status(404).send({message:"email is required"})
  else if (!phone || phone.length!==10)
  return res.status(404).send({message:"phone number is required"})
else{
    const user=new userModel({
      name,
      email,
      phone
    })
    await user.save()
    res.status(201).send({
      success:true,
      message:"new user added successfully",
     user
    })
  }
  } catch (error) {
    res.status(500).send({
      success:false,
      message:'error while adding new user ...',
      error
    })
  
  }
//   try {
    
    
// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'details';

// await client.connect();
// console.log('Connected successfully to server');
// const db = client.db(dbName);
// const collection = db.collection('detaillist');
// const collect=await collection.insertOne({

//   name:req.body.name,
//   email:req.body.email,
//   password:req.body.password
// }) 
// res.send("this is working dear have a nice day")
// console.log(collect)
//   } catch (error) {
//     console.log('this is error',error)
//   }
};

export const deleteapiController = (req, res) => {
  res.send("this is delete api is working ");
};

export const updateapiController = async(req, res) => {
  res.send("this is update api is working");
// try {
//   // Connection URL
// const URL = "mongodb://127.0.0.1:27017";

// //databse name
// const DB_NAME="sansung";
// const client=new MongoClient(URL)

//   await client.connect()
//   const db=client.db(DB_NAME)
//   const doc=db.collection("products")
//   // const result=await doc.insertOne({
//   //   name:"table",price:13000
//   // })

//   const result=await doc.insertOne({
//     name:req.body.name,
//     email:req.body.email,
//     password:req.body.password
//   })
//   console.log(result)

//   res.send("new product is added")
 
//   // res.send('running to db server')
    
// } catch (error) {
//     res.status(500).send({
//         success:false,
//         message:"error while adding a  record",
//         error
//     })
    
// }
};
