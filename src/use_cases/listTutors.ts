import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
async function  listTutors(req : Request, res : Response) {
    const prisma = new PrismaClient();
    const result = await prisma.user.findMany();
    res.status(200).send(result);
}

export default listTutors;