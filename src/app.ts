import express, {json} from "express"
import cors from "cors"
import morgan from "morgan"
import QuestionFactory from "./routes/QuestionFactory.routes"
import QuestionTypeFactory from "./routes/QuestionTypeFactory.routes"

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
app.use("/question", QuestionFactory)
app.use("/question-type", QuestionTypeFactory)

//listen
app.listen(app.get("port"))
console.log(`Server on port ${app.get("port")}`)

