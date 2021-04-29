import { QueryResult } from "pg"
import { pool } from "../config/database"
import {IAnswer } from "../model/Answer"


export const saveAnswer = async(answer: IAnswer) =>{
    const query: QueryResult = await pool.query(`INSERT INTO Answer (answer, idQuestion, correct) VALUES ('${answer.answer}', ${answer.idQuestion}, ${answer.correct}) RETURNING id`);
}