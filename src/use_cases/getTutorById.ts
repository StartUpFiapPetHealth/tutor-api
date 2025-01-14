import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";

const tutorRepository = new MakeTutorRepository().createTutorRepostitory();

async function getTutorById(req : Request, res : Response){
    try{

        let id : number = Number(req.params.id);
        let tutor = await tutorRepository.getTutorById(id);
        res.send(tutor);
    }catch(error){
        res.status(500).send(error);
    }
}

export default getTutorById;

