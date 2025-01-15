import { PrismaClient } from "@prisma/client";
import { IRepository } from "../repository";

export class MongoTutorRepository implements IRepository<ITutor>{

    prisma : PrismaClient;

    constructor(){
        this.prisma  = new PrismaClient();
    }
    
    save(tutor: ITutor){
        return this.prisma.tutor.create({
            data:{
                firstName: tutor.firstName,
                email : tutor.email
                }
            }
        );
    }
    update(tutor: ITutor) {
        return this.prisma.tutor.update({
            where : {
                email :tutor.email,                
            },
            data:{
                firstName : tutor.firstName,
                lastName: tutor.lastName
            }
        });
    }

    findById(tutorId: number) {
        return this.prisma.tutor.findFirst({
            where: {
                id : tutorId       
            },
            
            select: {
             id: true,
             createdAt: true,
             email: true,
             firstName: true,
             lastName: true,
             routine: true,
  
            }
        }
        )
    }

    getAll(): Promise<any[]>{
        return this.prisma.tutor.findMany();
    }

    delete(tutorId: number) {
        return this.prisma.tutor.delete(
            {
                where:{
                    id:tutorId
                }
            }
        )
    }   

}