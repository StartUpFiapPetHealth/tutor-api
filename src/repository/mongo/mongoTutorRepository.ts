import { Prisma, PrismaClient } from "@prisma/client";
import { IRepository } from "../repository";
import type {ITutor} from "../../model/tutor";
import {IRoutine} from "../../model/routine";
export class MongoTutorRepository implements IRepository<ITutor>{

    prisma : PrismaClient;

    constructor(){
        this.prisma  = new PrismaClient();
    }

    createRoutinePrismaJsonArray(tutor : ITutor){
        let routineArr = [] as Prisma.JsonArray;
        tutor.routines.forEach(routine => {
            let avaiablePeriodarr = [] as Prisma.JsonArray;
            routine.avaiablePeriods.forEach(ap =>{
                avaiablePeriodarr.push({
                    startTime :ap.startTime,
                    endTime : ap.endTime
                });
            });
            routineArr.push(
                {
                    dayOfWeek : routine.dayOfWeek,
                    avaiablePeriods : avaiablePeriodarr
                }
            );
        });

        return routineArr;
    }
    
    save(tutor: ITutor) : Promise<ITutor>{
        let routineArr = this.createRoutinePrismaJsonArray(tutor);
        return this.prisma.tutor.create({
            data:
                {
                    firstName : tutor.firstName,
                    lastName: tutor.lastName,
                    email : tutor.email,
                    contactNumber : tutor.contactNumber,
                    routines : routineArr
                }
            }
        ).then();
    }
    update(tutor: ITutor) : Promise<ITutor>{
        let routineArr = this.createRoutinePrismaJsonArray(tutor);
        return this.prisma.tutor.update({
            where : {
                id :tutor.id,                
            },
            data:{
                firstName : tutor.firstName,
                lastName: tutor.lastName,
                email : tutor.email,
                contactNumber : tutor.contactNumber,
                routines : routineArr
            }
        }).then();
    }

    findById(tutorId: string) : Promise<ITutor>{
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
             contactNumber : true,
             routines: true,
  
            }
        }
        ).then();
    }

    getAll(): Promise<ITutor[]>{
        return this.prisma.tutor.findMany().then();
    }

    delete(tutorId: string) {
        return this.prisma.tutor.delete(
            {
                where:{
                    id:tutorId
                }
            }
        ).then()
    }   

}