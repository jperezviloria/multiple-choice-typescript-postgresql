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
exports.showQuestionsToAdmin = exports.questionFactoryController = void 0;
const QuestionFactory_1 = require("../helper/QuestionFactory");
const ReturningQuestionToAdmin_1 = require("../helper/ReturningQuestionToAdmin");
const questionFactoryController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { idLevel, question, answers } = request.body;
    const newQuestion = {
        idLevel,
        question
    };
    console.log(newQuestion);
    console.log(answers);
    const implementingQuestionFactory = yield QuestionFactory_1.questionFactory(newQuestion, answers);
    if (!implementingQuestionFactory)
        return response.json({
            message: implementingQuestionFactory,
            status: 406
        });
    return response.json({
        message: implementingQuestionFactory,
        status: 201
    });
});
exports.questionFactoryController = questionFactoryController;
const showQuestionsToAdmin = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { idLevel } = request.body;
    console.log(idLevel);
    const implementingShowQuestions = yield ReturningQuestionToAdmin_1.ReturninQuestionToAdmin(idLevel);
    return response.json(implementingShowQuestions);
});
exports.showQuestionsToAdmin = showQuestionsToAdmin;
