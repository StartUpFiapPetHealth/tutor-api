import { Request, Response } from "express";

async function updateTutor(req : Request, res : Response){
    let updateTutorPayload = req.body;
    let jsonPayload = JSON.stringify(updateTutorPayload);
    res.send(`Updating tutor with the following data \n ${jsonPayload}`)
}

export default updateTutor;