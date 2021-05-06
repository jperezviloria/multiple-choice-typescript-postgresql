import {getAnswersByIdQuestion} from "../database/AnswerDatabase"
import {getQuestionsById} from "../database/QuestionsDatabase"
import {IQuestionFactory} from "../model/dto/request/QuetionFactoryDTO"
import {IAnswer} from "../model/Answer"
export const ReturninQuestionToAdmin = async(idLevel : number) =>{

  //finding question by id
  const questions = await getQuestionsById(idLevel)
  var newQuestionWithAnswers : IQuestionFactory[] = []
  //iterating each answers by question to push and join value
  for (var index= 0; index < questions.rowCount; index++){
   const particutarIdQuestion = questions.rows[index].id 
   const allAnswers = await getAnswersByIdQuestion(particutarIdQuestion)
   var questionJoined : IQuestionFactory = {
     id : questions.rows[index].id,
     question : questions.rows[index].question,
     answers : allAnswers.rows,
     idLevel : idLevel
   }
   newQuestionWithAnswers.push(questionJoined)
    
  }

  //returning value spected 
  return newQuestionWithAnswers;
  
  
} 
