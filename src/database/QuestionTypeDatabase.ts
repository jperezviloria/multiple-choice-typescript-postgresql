import { QueryResult } from "pg"
import { pool } from "../config/database"
import {IQuestionType } from "../model/QuestionType"


export const getAllQuestionType = async() =>{
    const query: QueryResult = await pool.query(`SELECT * FROM QuestionType`);
}



export const saveQuestionType = async(questionType:IQuestionType) =>{
    const query: QueryResult = await pool.query(`INSERT INTO QuestionType (idQuestion, idTestType) VALUES ('${questionType.idQuestion}', ${questionType.idTestType}) RETURNING id`);
}
