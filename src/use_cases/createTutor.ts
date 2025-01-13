import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


async function createTutor(req : Request, res: Response){
    const prisma = new PrismaClient();
    let newTutorPayload = req.body;

    let jsonPayload = JSON.stringify(newTutorPayload);
    const user = await prisma.user.create({
        data: {
          firstName: req.body.firstName,
          email : req.body.email
        },
      })
    res.send(`Creating tutor with the following data \n ${jsonPayload}`);
}

export default createTutor;