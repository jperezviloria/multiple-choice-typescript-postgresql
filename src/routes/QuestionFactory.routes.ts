import {Router} from "express"
import {questionFactoryController} from "../controller/QuestionFactoryController"


const router = Router();

router.route("/factory")
.post(questionFactoryController)


export default router;