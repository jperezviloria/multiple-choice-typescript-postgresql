import express, {json} from "express"
import cors from "cors"
import morgan from "morgan"

import TicketRouter from "./routes/Ticket.routes"

//initialization
const app = express()

//settings 
app.set("port", 3005)

//middlewares
app.use(morgan("dev"))
app.use(json())
app.use(cors())


//routes
app.use("/ticket", TicketRouter)


//listen
app.listen(app.get("port"))
console.log(`Server on port ${app.get("port")}`)
