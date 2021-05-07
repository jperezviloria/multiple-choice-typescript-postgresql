import {Router} from "express"
import {questionFactoryController, showQuestionsToAdmin} from "../controller/QuestionFactoryController"



const router = Router();

router.route("/factory")
.post(questionFactoryController)

router.route("/factory/byid")
.post(showQuestionsToAdmin)

export default router;
