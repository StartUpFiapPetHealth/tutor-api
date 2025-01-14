import { MongoTutorRepository } from "../mongo/mongoTutorRepository";
import { ITutorRepository } from "./tutorRepository";

export class MakeTutorRepository{

    createTutorRepostitory() : ITutorRepository{
        return new MongoTutorRepository();
    }

}