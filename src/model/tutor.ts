interface ITutor {
    id : number;
    firstName : string;
    lastName : string;
    email : string;
}

interface IRoutine{
    dayOfWeek : number;
    avaiablePeriods : AvaiblePeriod[];
}

interface AvaiblePeriod{
    startTime : Date;
    endTime : Date;
}
