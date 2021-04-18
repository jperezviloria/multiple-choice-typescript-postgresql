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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTicketController = exports.getAllTicketsController = void 0;
const TicketDatabase_1 = require("../database/TicketDatabase");
const moment_1 = __importDefault(require("moment"));
const getAllTicketsController = (req, res) => {
};
exports.getAllTicketsController = getAllTicketsController;
const saveTicketController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description } = req.body;
    //const actualDate = moment().format('l');
    const ticket = {
        description,
        date: moment_1.default(new Date()).format('yyyy-MM-DD') //2021-04-17
        //date : moment(new Date()).format() //"2021-04-17T15:31:17-03:00"
        //date : moment(new Date()).format('h:mm:ss a') //"3:39:52 pm"
    };
    console.log(ticket);
    const newTicket = yield TicketDatabase_1.saveTicket(ticket);
    res.json({
        data: newTicket.rows[0]
    });
});
exports.saveTicketController = saveTicketController;
