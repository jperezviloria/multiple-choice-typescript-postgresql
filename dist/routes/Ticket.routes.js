"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketController_1 = require("../controller/TicketController");
const router = express_1.Router();
router.route("/ticket")
    .post(TicketController_1.saveTicketController);
exports.default = router;
