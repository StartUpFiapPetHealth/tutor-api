import {Router} from "express";
import listTutors from "../use_cases/listTutors";
import getTutorById from "../use_cases/getTutorById";
import updateTutor from "../use_cases/updateTutor";
import createTutor from "../use_cases/createTutor";
import deleteTutor from "../use_cases/deleteTutor";

export const tutorRouter = Router();

tutorRouter.get("/tutor", listTutors);
tutorRouter.get("/tutor/:id", getTutorById);
tutorRouter.post("/tutor", createTutor);
tutorRouter.put("/tutor", updateTutor);
tutorRouter.delete("/tutor", deleteTutor);

