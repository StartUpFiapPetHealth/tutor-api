import { Request, Response } from "express";
import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { MakeTutorService } from "../service/makeTutorService";

const tutorService = MakeTutorService.createTutorService();

async function getTutorById(req : Request, res : Response){
    try{

        let id : string = req.params.id;
        let tutor = await tutorService.getTutorById(id);

        if(tutor === null)
            res.status(404).send('Tutor not found!');

        res.status(200).send(tutor);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

export default getTutorById;

