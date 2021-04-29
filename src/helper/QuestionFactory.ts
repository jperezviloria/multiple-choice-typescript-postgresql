import {Request, Response} from "express"
import { IQuestion } from "../model/Questions"
import { IAnswer } from "../model/Answer"
import { IQuestionType } from "../model/QuestionType"
import { saveQuestion } from "../database/QuestionsDatabase"
import { saveAnswer } from "../database/AnswerDatabase"
import { saveQuestionType } from "../database/QuestionTypeDatabase"

export const questionFactory = async(question:IQuestion, answers:IAnswer[]):Promise<Boolean> =>{
        const idQuestion = await createQuestion(question);
        if (idQuestion == -1) 
        throw new Error("Question Factory can`t complete the process because broke in create question");
        const responseAnswers = await createAnswerWithIteration(answers, idQuestion)
        if (responseAnswers == -2) 
        throw new Error("Question Factory can`t complete the process because broke in create answer");
        return true
}

export const createQuestion = async(question:IQuestion):Promise<number> =>{
    try{
        const newQuestion = await saveQuestion(question);
        return newQuestion
    }catch(error){
        console.log(error)
        return -1
    }
}

export const createAnswerWithIteration = async(answers:IAnswer[], idQuestion: number) =>{
    
    try{
        for (let particularAnswer of answers){
            particularAnswer.idQuestion = idQuestion
            const newAnswer = await saveAnswer(particularAnswer)
            console.log("Answer saved\n")
        }
    }catch(error){
        console.log(error)
        return -2
    }
}
