import { Request, Response } from "express";

async function createTutor(req : Request, res: Response){
    let newTutorPayload = req.body;
    let jsonPayload = JSON.stringify(newTutorPayload);
    res.send(`Creating tutor with the following data \n ${jsonPayload}`);
}

export default createTutor;