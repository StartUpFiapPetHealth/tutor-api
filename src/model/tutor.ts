interface ITutor {
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    contactNumber : string;
    routines : IRoutine[];
}

interface IRoutine{
    dayOfWeek : number;
    avaiablePeriods : AvaiablePeriod[];
}

interface AvaiablePeriod{
    startTime : string;
    endTime : string;
}
