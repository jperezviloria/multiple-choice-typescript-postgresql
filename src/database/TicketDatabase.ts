import {QueryResult} from "pg"
import {pool} from "../config/database"
import {ITicket} from "../model/Ticket"


export const getAllTickets = async() =>{
    const query: QueryResult = await pool.query(`SELECT * FROM ticket;`);
    return query;
}

//INSERT INTO Profile (username) values('maria') RETURNING idProfile, username;
export const saveTicket = async(ticket: ITicket) =>{
    const query: QueryResult = await pool.query(`INSERT INTO ticket (description, date) VALUES ( '${ticket.description}','${ticket.date}') RETURNING idTicket, description,date;`);
    return query;
}