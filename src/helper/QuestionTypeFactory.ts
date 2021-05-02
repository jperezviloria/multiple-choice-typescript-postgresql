import { IQuestionType } from "../model/QuestionType"
import { ITestType } from "../model/TestType"
import { saveQuestionType } from "../database/QuestionTypeDatabase"
import { saveTestType } from "../database/TestTypeDatabase"


export const questionTypeFactory = async(idQuestions:number[], testType:ITestType):Promise<Boolean> =>{
        const idTestType = await createTestType(testType);
        if (idTestType == -1) 
        throw new Error("Question Factory can`t complete the process because broke in create TestType");
        const responseAnswers = await createQuestionTypeWithIteration(idQuestions, idTestType)
        if (responseAnswers == -2) 
        throw new Error("Question Factory can`t complete the process because broke in create Question Type");
        return true
}

export const createTestType = async(testType:ITestType):Promise<number> =>{
    try{
        const newTestType = await saveTestType(testType);
        return newTestType.rows[0].id
    }catch(error){
        console.log(error)
        return -1
    }
}

export const createQuestionTypeWithIteration = async(idQuestions:number[], idTestType: number) =>{
    try{
        for (let particularIdQuestion of idQuestions){
            var questionType: IQuestionType = {
                idQuestion: particularIdQuestion,
                idTestType: idTestType
            }
            const newQuestionType = await saveQuestionType(questionType)
            console.log("Question type saved\n")
        }
    }catch(error){
        console.log(error)
        return -2
    }
}
