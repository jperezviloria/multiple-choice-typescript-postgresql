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
exports.saveTicket = exports.getAllTickets = void 0;
const database_1 = require("../config/database");
const getAllTickets = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`SELECT * FROM ticket;`);
    return query;
});
exports.getAllTickets = getAllTickets;
//INSERT INTO Profile (username) values('maria') RETURNING idProfile, username;
const saveTicket = (ticket) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`INSERT INTO ticket (description, date) VALUES ( '${ticket.description}','${ticket.date}') RETURNING idTicket, description,date;`);
    return query;
});
exports.saveTicket = saveTicket;
