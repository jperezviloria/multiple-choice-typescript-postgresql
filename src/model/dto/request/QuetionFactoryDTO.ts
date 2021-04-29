import {IAnswer} from "../../Answer"

export interface IQuestionFactory {
    id ?: number,
    idLevel : number,
    question : string,
    answers : IAnswer[]

}