import {Request, Response} from "express"
import {IQuestionFactory} from "../model/dto/request/QuetionFactoryDTO"
import {questionTypeFactory} from "../helper/QuestionTypeFactory"
import {ITestType} from "../model/TestType"
import {IQuestion} from "../model/Questions"



export const  questionTypeFactoryController = async(request: Request, response: Response) =>{

    const {
        contextName,
        idQuestions
    } = request.body;
    
    const newTestType : ITestType = {
        contextName
    }
    const implementingQuestionTypeFactory = await questionTypeFactory(idQuestions, newTestType);
    if (!implementingQuestionTypeFactory)
    return response.json({
        message: implementingQuestionTypeFactory,
        status: 406
    })
    return response.json({
        message: implementingQuestionTypeFactory,
        status: 201
    })
    
}