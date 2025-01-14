import { PrismaClient } from "@prisma/client";
import { ITutorRepository } from "../repository/tutorRepository";

export class MongoTutorRepository implements ITutorRepository{

    prisma : PrismaClient;

    constructor(){
        this.prisma  = new PrismaClient();
    }
    
    saveTutor(tutor: ITutor){
        return this.prisma.tutor.create({
            data:{
                firstName: tutor.firstName,
                email : tutor.email
                }
            }
        );
    }
    updateTutor(tutor: ITutor) {
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

    getTutorById(tutorId: number) {
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

    getTutors(): Promise<any[]>{
        return this.prisma.tutor.findMany();
    }

    deleteTutor(tutorId: number) {
        return this.prisma.tutor.delete(
            {
                where:{
                    id:tutorId
                }
            }
        )
    }   

}