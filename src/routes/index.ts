import { Router } from "express";
import {tutorRouter} from "./tutorRouter";

export const routes = Router();

routes.use(tutorRouter);

