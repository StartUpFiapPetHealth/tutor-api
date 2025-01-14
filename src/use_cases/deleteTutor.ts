import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";

const tutorRepository = new MakeTutorRepository().createTutorRepostitory();
async function deleteTutor(req : Request, res : Response){
    try{

        let id = Number(req.params.id);
        let dbTutor = await tutorRepository.getTutorById(id);
        
        if(dbTutor === null)
            res.status(404).send('Tutor not found!');
        
        await tutorRepository.deleteTutor(id);
        res.status(204).send('Tutor deleted!')
    }catch(error){
        res.status(505).send(error);
    }
}

export default deleteTutor;