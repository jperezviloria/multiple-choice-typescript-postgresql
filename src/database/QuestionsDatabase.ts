import { QueryResult } from "pg"
import { pool } from "../config/database"
import {IQuestion } from "../model/Questions"


export const getAllQuestionByLevelId = async(question:IQuestion) =>{
    const query: QueryResult = await pool.query(`SELECT * FROM Question WHERE idLevel = ${question.idLevel}`);
}



export const saveQuestion = async(question:IQuestion):Promise<any> =>{
    const query: QueryResult = await pool.query(`INSERT INTO Question (question, idlevel) VALUES ('${question.question}', ${question.idLevel}) RETURNING id`);
    return query;
}

export const getQuestionsById = async(level: number):Promise<any> =>{
  const query: QueryResult = await pool.query(`SELECT * FROM Question WHERE idLevel = ${level}`);
  return query;

}
