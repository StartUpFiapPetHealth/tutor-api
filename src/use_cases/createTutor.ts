import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { MakeTutorService } from "../service/makeTutorService";

const tutorService = MakeTutorService.createTutorService();

async function createTutor(req : Request, res: Response){    
    try{

        let tutor : ITutor = req.body as ITutor;
        
        const savedTutor = await tutorService.saveTutor(tutor);
        
        res.send(`Creating tutor with the following data \n ${savedTutor}`);
    }catch(error){
        res.status(500).send(error);
    }

 }

export default createTutor;