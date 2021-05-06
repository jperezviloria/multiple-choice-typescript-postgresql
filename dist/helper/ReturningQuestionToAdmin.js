"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturninQuestionToAdmin = void 0;
const AnswerDatabase_1 = require("../database/AnswerDatabase");
const QuestionsDatabase_1 = require("../database/QuestionsDatabase");
const ReturninQuestionToAdmin = (idLevel) => __awaiter(void 0, void 0, void 0, function* () {
    //finding question by id
    const questions = yield QuestionsDatabase_1.getQuestionsById(idLevel);
    var newQuestionWithAnswers = [];
    //iterating each answers by question to push and join value
    for (var index = 0; index < questions.rowCount; index++) {
        const particutarIdQuestion = questions.rows[index].id;
        const allAnswers = yield AnswerDatabase_1.getAnswersByIdQuestion(particutarIdQuestion);
        var questionJoined = {
            id: questions.rows[index].id,
            question: questions.rows[index].question,
            answers: allAnswers.rows,
            idLevel: idLevel
        };
        newQuestionWithAnswers.push(questionJoined);
    }
    //returning value spected 
    return newQuestionWithAnswers;
});
exports.ReturninQuestionToAdmin = ReturninQuestionToAdmin;
