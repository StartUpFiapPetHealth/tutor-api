
export interface ITutorService{
    saveTutor(tutor : ITutor) : any
    updateTutor(tutor : ITutor) : any
    deleteTutor(id : number) : any
    getTutorById(id : number) : any
    getTutors() : Promise<any[]>
}