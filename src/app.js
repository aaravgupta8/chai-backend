import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({       //use is used when using middlewares, we dont use get/post then
    origin: process.env.CORS_ORIGIN,
    credentials: true 
})) 

app.use(express.json({limit: "16kb"}))

// app.use(express.urlencoded) //jab data URL se uske liye
app.use(express.urlencoded({extended: true, limit:"16kb"}))

app.use(express.static("public")) //store files like pdf,images in the folder public, we can keep any name instead of public etc


// USE OF COOKIE=PARSER 
// server se jo user ka browser hai uski cookies access bhi kar pau aur set bhi kar pau 
app.use(cookieParser())



// when we hit a URL like example /insta then we handle it like (req,res) and then res.send("hitesh") 
// but we get too requests on the URL but are we capable of that request? to check that the process is called middleware 

// but to handle these requests it not only (req,res) it is
// (err, req, res, next) if we used next it means we are using middlewares so the work of next is like a flag, if it does it job it passes it to the next one by passing a flag

 






export { app }
