import {Request, Response} from "express"
import {IQuestionFactory} from "../model/dto/request/QuetionFactoryDTO"
import {questionFactory} from "../helper/QuestionFactory"
import {IAnswer} from "../model/Answer"
import {IQuestion} from "../model/Questions"
import {ReturninQuestionToAdmin} from "../helper/ReturningQuestionToAdmin"



export const  questionFactoryController = async(request: Request, response: Response) =>{

    const {
        idLevel,
        question,
        answers
    } = request.body;
    
    const newQuestion : IQuestion = {
        idLevel,
        question
    }

    console.log(newQuestion)
    console.log(answers)
    const implementingQuestionFactory = await questionFactory(newQuestion, answers);
    if (!implementingQuestionFactory)
    return response.json({
        message: implementingQuestionFactory,
        status: 406
    })
    return response.json({
        message: implementingQuestionFactory,
        status: 201
    })
    
}


export const showQuestionsToAdmin = async(request: Request, response: Response) =>{
  const {idLevel} = request.body;
  console.log(idLevel)
  const implementingShowQuestions = await ReturninQuestionToAdmin(idLevel)
  return response.json(implementingShowQuestions)
}
