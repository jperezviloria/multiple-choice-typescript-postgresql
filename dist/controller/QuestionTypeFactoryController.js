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
exports.questionTypeFactoryController = void 0;
const QuestionTypeFactory_1 = require("../helper/QuestionTypeFactory");
const questionTypeFactoryController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { contextName, idQuestions } = request.body;
    const newTestType = {
        contextName
    };
    const implementingQuestionTypeFactory = yield QuestionTypeFactory_1.questionTypeFactory(idQuestions, newTestType);
    if (!implementingQuestionTypeFactory)
        return response.json({
            message: implementingQuestionTypeFactory,
            status: 406
        });
    return response.json({
        message: implementingQuestionTypeFactory,
        status: 201
    });
});
exports.questionTypeFactoryController = questionTypeFactoryController;
