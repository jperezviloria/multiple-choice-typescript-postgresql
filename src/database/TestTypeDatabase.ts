import { QueryResult } from "pg"
import { pool } from "../config/database"
import {ITestType } from "../model/TestType"


export const getAllTestType = async() =>{
    const query: QueryResult = await pool.query(`SELECT * FROM TestType`);
}



export const saveTestType = async(testType:ITestType) =>{
    const query: QueryResult = await pool.query(`INSERT INTO TestType (nameType) VALUES ('${testType.name}') RETURNING id`);
}
