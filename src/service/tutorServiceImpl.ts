import { IRepository } from "../repository/repository";
import { ITutorService } from "./tutorService";
import { ITutor } from "../model/tutor";
import { TutorNotFound } from "../error/tutor.exceptions";

export class TutorService implements ITutorService{
    
    repository : IRepository<ITutor>;

    constructor(repository : IRepository<ITutor>){
        this.repository = repository;
    }

    saveTutor(tutor: ITutor) {
        return this.repository.save(tutor);
    }

    updateTutor(tutor: ITutor) : Promise<ITutor> {
        const dbTutor = this.getTutorById(tutor.id);
        if(dbTutor === null)
            throw new TutorNotFound(tutor.id);
        return this.repository.update(tutor);
    }

    deleteTutor(id: string) : Promise<void> {
        return this.repository.delete(id);
    }

    getTutorById(id: string) : Promise<ITutor> {
        return this.repository.findById(id);
    }

    getTutors(): Promise<ITutor[]> {
        return this.repository.getAll();
    }

}