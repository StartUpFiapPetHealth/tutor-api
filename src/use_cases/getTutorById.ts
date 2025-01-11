import { Request, Response } from "express";

async function getTutorById(req : Request, res : Response){
    console.log('get tutor by id');
    let id : string = req.params.id;
    res.send(`Find tutor by id ${id}`);
}

export default getTutorById;

