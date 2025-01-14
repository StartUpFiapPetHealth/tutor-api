import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";

const tutorRepository = new MakeTutorRepository().createTutorRepostitory();

async function  listTutors(req : Request, res : Response) {
    try{

        const result = await tutorRepository.getTutors();
        
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }
}

export default listTutors;