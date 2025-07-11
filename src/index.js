// require('dotenv').config({path: './env'}) //this line is not written nowadays at the top as it is a problem now
//what we do is written below

import dotenv from "dotenv"
import connectDB from "./db/db1.js"

dotenv.config({
    path: './env'
})
//SECOND APPROACH, we take a seperate file in the DB folder or wherever and write the full code there and export and call it in index file

connectDB()
.then(() => {
    app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error 
        })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!", err);
})





/*
FIRST APPROACH BY IIFE, ASYNC AWAIT 

import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error 
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err 
    }
})() // IIFE 
 */