import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { MakeTutorService } from "../service/makeTutorService";
import { ITutor } from "../model/tutor";

const tutorService = MakeTutorService.createTutorService();

async function updateTutor(req : Request, res : Response){
    try{

        let tutor : ITutor = req.body as ITutor;
        let dbTutor = await tutorService.getTutorById(tutor.id);
        
        if(dbTutor === null)
            res.status(404).send("Tutor not found!");
        
        await tutorService.updateTutor(tutor);
        res.status(201).send("Tutor updated!");
    }catch(error){
        
        res.status(500).send(error);
    }
}

export default updateTutor;