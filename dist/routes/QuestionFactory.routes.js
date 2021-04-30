"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuestionFactoryController_1 = require("../controller/QuestionFactoryController");
const router = express_1.Router();
router.route("/factory")
    .post(QuestionFactoryController_1.questionFactoryController);
exports.default = router;
