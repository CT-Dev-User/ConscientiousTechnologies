import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { conn } from './connection.js'
import { dataroute } from "./routes/DataRoute.js";
import userroute from "./routes/userRoute.js";

const app = express()
app.use(express.json())

app.use(cors())

app.use(dataroute)
app.use(userroute)



app.listen(process.env.PORT, () => {
    console.log('server runnning @http://localhost:8080/')
})




