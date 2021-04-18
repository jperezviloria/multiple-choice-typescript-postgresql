import {Router} from "express"
import { saveTicketController } from "../controller/TicketController"


const router: Router = Router()

router.route("/ticket")
.post(saveTicketController)

export default router;