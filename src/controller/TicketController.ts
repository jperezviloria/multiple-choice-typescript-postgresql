import {Request, Response} from "express"
import {getAllTickets, saveTicket} from "../database/TicketDatabase"
import { ITicket } from "../model/Ticket"

import moment from "moment"


export const getAllTicketsController = (req: Request, res: Response) =>{

}

export const saveTicketController = async(req: Request, res: Response) =>{
    const {description} = req.body;
    //const actualDate = moment().format('l');

    const ticket: ITicket = {
        description,
        date : moment(new Date()).format('yyyy-MM-DD') //2021-04-17
        //date : moment(new Date()).format() //"2021-04-17T15:31:17-03:00"
        //date : moment(new Date()).format('h:mm:ss a') //"3:39:52 pm"
    }


    console.log(ticket)
    const newTicket = await saveTicket(ticket)
    
    res.json({
        data: newTicket.rows[0]
    })




}