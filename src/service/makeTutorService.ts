import { MakeTutorRepository } from "../repository/makeTutorRepository";
import { ITutorService } from "./tutorService";
import { TutorService } from "./tutorServiceImpl";

export class MakeTutorService{

    static createTutorService() : ITutorService{
        const tutorRepository = MakeTutorRepository.createTutorRepostitory();
        return new TutorService(tutorRepository);
    }

}