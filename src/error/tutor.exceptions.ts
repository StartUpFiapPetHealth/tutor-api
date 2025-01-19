export class TutorAlreadyExist extends Error{
    constructor(tutorEmail : string){
        super(`Tutor with email ${tutorEmail} already exists`);
    }
}

export class TutorNotFound extends Error {
    constructor(tutorId : string){
        super(`Tutor ${tutorId} not found!`)
    }
}

