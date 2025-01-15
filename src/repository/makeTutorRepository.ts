import { MongoTutorRepository } from "./mongo/mongoTutorRepository";
import { IRepository } from "./repository";

export class MakeTutorRepository{

    static createTutorRepostitory() : IRepository<ITutor>{
        return new MongoTutorRepository();
    }

}