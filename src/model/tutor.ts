import { IRoutine } from "./routine";

export interface ITutor {
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    contactNumber : string;
    routines : IRoutine[];
}


