import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { MakeTutorService } from "../service/makeTutorService";

const tutorService = MakeTutorService.createTutorService();

async function deleteTutor(req : Request, res : Response){
    try{

        let id = Number(req.params.id);
        let dbTutor = await tutorService.getTutorById(id);
        
        if(dbTutor === null)
            res.status(404).send('Tutor not found!');
        
        await tutorService.deleteTutor(id);
        res.status(204).send('Tutor deleted!')
    }catch(error){
        res.status(505).send(error);
    }
}

export default deleteTutor;