"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuestionTypeFactoryController_1 = require("../controller/QuestionTypeFactoryController");
const router = express_1.Router();
router.route("/factory")
    .post(QuestionTypeFactoryController_1.questionTypeFactoryController);
exports.default = router;
