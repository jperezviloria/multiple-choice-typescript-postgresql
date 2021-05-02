import {Router} from "express"
import {questionTypeFactoryController} from "../controller/QuestionTypeFactoryController"


const router = Router();

router.route("/factory")
.post(questionTypeFactoryController)


export default router;