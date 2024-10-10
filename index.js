import express from "express";
import cors from 'cors'
import { conn } from './connection.js'

import { dataroute } from "./routes/DataRoute.js";
import route from "./routes/userRoute.js";
import latestrouter from "./latestRoutes/latestDataroute.js";

const app = express()
app.use(express.json())

app.use(cors())

app.use(latestrouter)

app.use(dataroute)
app.use(route)



app.listen(process.env.PORT, () => {
    console.log('server runnning @http://localhost:8080/')
})




