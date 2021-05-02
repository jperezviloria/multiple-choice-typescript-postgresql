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
exports.createAnswerWithIteration = exports.createQuestion = exports.questionFactory = void 0;
const QuestionsDatabase_1 = require("../database/QuestionsDatabase");
const AnswerDatabase_1 = require("../database/AnswerDatabase");
const questionFactory = (question, answers) => __awaiter(void 0, void 0, void 0, function* () {
    const idQuestion = yield exports.createQuestion(question);
    if (idQuestion == -1)
        throw new Error("Question Factory can`t complete the process because broke in create question");
    const responseAnswers = yield exports.createAnswerWithIteration(answers, idQuestion);
    if (responseAnswers == -2)
        throw new Error("Question Factory can`t complete the process because broke in create answer");
    return true;
});
exports.questionFactory = questionFactory;
const createQuestion = (question) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newQuestion = yield QuestionsDatabase_1.saveQuestion(question);
        return newQuestion.rows[0].id;
    }
    catch (error) {
        console.log(error);
        return -1;
    }
});
exports.createQuestion = createQuestion;
const createAnswerWithIteration = (answers, idQuestion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (let particularAnswer of answers) {
            particularAnswer.idQuestion = idQuestion;
            const newAnswer = yield AnswerDatabase_1.saveAnswer(particularAnswer);
            console.log("Answer saved\n");
        }
    }
    catch (error) {
        console.log(error);
        return -2;
    }
});
exports.createAnswerWithIteration = createAnswerWithIteration;
