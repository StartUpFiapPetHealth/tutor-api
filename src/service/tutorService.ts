
import { ITutor } from "../model/tutor";

export interface ITutorService{
    saveTutor(tutor : ITutor) : Promise<ITutor>
    updateTutor(tutor : ITutor) : Promise<ITutor>
    deleteTutor(id : string) : Promise<void>
    getTutorById(id : string) : Promise<ITutor>
    getTutors() : Promise<ITutor[]>
}