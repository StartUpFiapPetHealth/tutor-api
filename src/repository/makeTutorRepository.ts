import { MongoTutorRepository } from "./mongo/mongoTutorRepository";
import { IRepository } from "./repository";
import type {ITutor} from "../model/tutor";
export class MakeTutorRepository{

    static createTutorRepostitory() : IRepository<ITutor>{
        return new MongoTutorRepository();
    }

}