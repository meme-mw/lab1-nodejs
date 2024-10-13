import mongoose from "mongoose"
import express from "express";
import Book from "./models/book.js"
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "./models/user.js"
import router from "./routes/userRouter.js";
import routerb from "./routes/bookRouter.js";

dotenv.config();

const app=express()
app.use(express.json())
app.use('/', router)
app.use('/', routerb)
app.get("/book",(req,res)=>{
    const books = new Book({
        name:"A Light Touch",
        author:"David Curtis",
        num_of_cop:60,
        dat_of_pub:"1997", 
        isDeg:false,
        price:150,
        langs:["Engilsh"],
        genre:"Arts"
    })
    books.save()
    .then((result)=>{
        res.send(result)
    })
    
    })
    // app.post("/addBook",(req,res)=>{
    //    const books = new Book({
    //     name:req.body.name,
    //     author:req.body.author,
    //     num_of_cop:req.body.num_of_cop,
    //     dat_of_pub:req.body.dat_of_pub, 
    //     isDeg:req.body.isDeg,
    //     price:req.body.price,
    //     langs:req.body.langs,
    //     genre:req.body.genre
    //    })
    //    books.save()
    //    .then((result)=>{
    //        res.send(result)
    //    })
    // })
  




   

    //   app.patch("/addBook/:id",(req,res)=>{
    //     const {id}=req.params
        
    //     Book.findByIdAndUpdate(id,req.body,{new:true,runValidators:true}).then(result=>{
    //        res.send(result)
    //    })
    //  })

    //  app.get("/addBook/:id",(req,res)=>{
    //     const {id}=req.params
    //     Book.findByIdAndUpdate(id).then(result=>{
    //        res.send(result)
    //    })
    //  })
    //  app.delete("/addBook/:id",(req,res)=>{
    //     const {id}=req.params
    //     Book.findByIdAndDelete(id).then(result=>{
    //        res.send(result)
    //    })
    //  })
     
     
main().catch(err => console.log(err));
async function main() { 
    await mongoose.connect(process.env.MONGO_URL);
  console.log("----------------////////////")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

app.listen(8080, function () {
    console.log("Express App running at mongod");
 })