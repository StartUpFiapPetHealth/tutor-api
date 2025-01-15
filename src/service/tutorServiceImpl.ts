import { IRepository } from "../repository/repository";
import { ITutorService } from "./tutorService";

export class TutorService implements ITutorService{
    
    repository : IRepository<ITutor>;
    constructor(repository : IRepository<ITutor>){
        this.repository = repository;
    }

    saveTutor(tutor: ITutor) {
        return this.repository.save(tutor);
    }

    updateTutor(tutor: ITutor) {
        this.repository.update(tutor);
    }

    deleteTutor(id: number) {
        throw new Error("Method not implemented.");
    }

    getTutorById(id: number) {
        throw new Error("Method not implemented.");
    }

    getTutors(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

}