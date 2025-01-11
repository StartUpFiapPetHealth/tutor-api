import { Request, Response } from "express";

async function  listTutors(req : Request, res : Response) {
    console.log('Listing tutors');
    res.send("Tutors listed");
}

export default listTutors;