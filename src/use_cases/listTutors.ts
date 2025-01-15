import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { MakeTutorService } from "../service/makeTutorService";

const tutorService = MakeTutorService.createTutorService();

async function  listTutors(req : Request, res : Response) {
    try{

        const result = await tutorService.getTutors();
        
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(error);
    }
}

export default listTutors;