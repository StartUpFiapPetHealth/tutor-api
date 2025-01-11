import { Request, Response } from "express";

async function deleteTutor(req : Request, res : Response){
    let id : string = req.params.id;
    res.send(`Deleting tutor ${id}`)
}

export default deleteTutor;