// require('dotenv').config({path: './env'})
import express from "express"
const app = express();

import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

console.log("MONGODB_URI from env:", process.env.MONGODB_URI);

console.log("Connecting to:", `${process.env.MONGODB_URI}/${DB_NAME}`);

app.get('/',(req,res)=>{
    res.send("Hello World !");
});
connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










/*
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/