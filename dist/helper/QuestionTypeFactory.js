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
exports.createQuestionTypeWithIteration = exports.createTestType = exports.questionTypeFactory = void 0;
const QuestionTypeDatabase_1 = require("../database/QuestionTypeDatabase");
const TestTypeDatabase_1 = require("../database/TestTypeDatabase");
const questionTypeFactory = (idQuestions, testType) => __awaiter(void 0, void 0, void 0, function* () {
    const idTestType = yield exports.createTestType(testType);
    if (idTestType == -1)
        throw new Error("Question Factory can`t complete the process because broke in create TestType");
    const responseAnswers = yield exports.createQuestionTypeWithIteration(idQuestions, idTestType);
    if (responseAnswers == -2)
        throw new Error("Question Factory can`t complete the process because broke in create Question Type");
    return true;
});
exports.questionTypeFactory = questionTypeFactory;
const createTestType = (testType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTestType = yield TestTypeDatabase_1.saveTestType(testType);
        return newTestType.rows[0].id;
    }
    catch (error) {
        console.log(error);
        return -1;
    }
});
exports.createTestType = createTestType;
const createQuestionTypeWithIteration = (idQuestions, idTestType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (let particularIdQuestion of idQuestions) {
            var questionType = {
                idQuestion: particularIdQuestion,
                idTestType: idTestType
            };
            const newQuestionType = yield QuestionTypeDatabase_1.saveQuestionType(questionType);
            console.log("Question type saved\n");
        }
    }
    catch (error) {
        console.log(error);
        return -2;
    }
});
exports.createQuestionTypeWithIteration = createQuestionTypeWithIteration;
