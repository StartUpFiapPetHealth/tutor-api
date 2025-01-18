
export interface ITutorService{
    saveTutor(tutor : ITutor) : Promise<ITutor>
    updateTutor(tutor : ITutor) : Promise<ITutor>
    deleteTutor(id : string) : any
    getTutorById(id : string) : Promise<ITutor>
    getTutors() : Promise<ITutor[]>
}