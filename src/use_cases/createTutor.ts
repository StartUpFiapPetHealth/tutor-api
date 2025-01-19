import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { MakeTutorService } from "../service/makeTutorService";
import { sendMessage } from "../middleware/message/sendTutorCreatedMessage";
import { ITutor } from "../model/tutor";

const tutorService = MakeTutorService.createTutorService();

async function createTutor(req : Request, res: Response){    
    try{

        let tutor : ITutor = req.body as ITutor;
        const savedTutor = await tutorService.saveTutor(tutor);
        await sendMessage(savedTutor);
        res.send(`Creating tutor with the following data \n ${savedTutor}`);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }

 }

export default createTutor;