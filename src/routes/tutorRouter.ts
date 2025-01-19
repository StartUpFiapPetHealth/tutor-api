import {Router} from "express";
import listTutors from "../use_cases/listTutors";
import getTutorById from "../use_cases/getTutorById";
import updateTutor from "../use_cases/updateTutor";
import createTutor from "../use_cases/createTutor";
import deleteTutor from "../use_cases/deleteTutor";

export const tutorRouter = Router();

/**
 * @swagger
 * /tutor:
 *   get:
 *     summary: Return a list of tutros
 *     responses:
 *       200:
 *         description: List tutors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: "Adamastor"
 *                   lastName:
 *                     type: string
 *                     example: "De Oliveira"
 *                   email:
 *                     type: string
 *                     example: "adamastor.oliveira@email.com"
 *                   contactNumber:
 *                     type: string
 *                     example: "99-99999-9999"
 *                   routines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         dayOfWeek:
 *                           type: string
 *                           example: "1 (Monday)"
 *                         avaiablePeriods:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               startTime:
 *                                 type: string
 *                                 example: "10:00"
 *                               endTime:
 *                                 type: string
 *                                 example: "10:00"
 */
tutorRouter.get("/tutor", listTutors);

/**
 * @swagger
 * /tutor/{id}:
 *   get:
 *     summary: Return a tutor by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be used on the search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tutor information found for the given ID
  *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: "Adamastor"
 *                   lastName:
 *                     type: string
 *                     example: "De Oliveira"
 *                   email:
 *                     type: string
 *                     example: "adamastor.oliveira@email.com"
 *                   contactNumber:
 *                     type: string
 *                     example: "99-99999-9999"
 *                   routines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         dayOfWeek:
 *                           type: string
 *                           example: "1 (Monday)"
 *                         avaiablePeriods:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               startTime:
 *                                 type: string
 *                                 example: "10:00"
 *                               endTime:
 *                                 type: string
 *                                 example: "10:00"
 */
tutorRouter.get("/tutor/:id", getTutorById);

/**
 * @swagger
 * /tutor:
 *   post:
 *     summary: Create a new tutor
 *     parameters:
 *       - in: body
 *         name: tutor_data
 *         required: true
 *         description: 
 *         schema:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: "Adamastor"
 *                   lastName:
 *                     type: string
 *                     example: "De Oliveira"
 *                   email:
 *                     type: string
 *                     example: "adamastor.oliveira@email.com"
 *                   contactNumber:
 *                     type: string
 *                     example: "99-99999-9999"
 *                   routines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         dayOfWeek:
 *                           type: string
 *                           example: "1 (Monday)"
 *                         avaiablePeriods:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               startTime:
 *                                 type: string
 *                                 example: "10:00"
 *                               endTime:
 *                                 type: string
 *                                 example: "10:00"
 *     responses:
 *       201:
 *         description: Create a new tutor
 */
tutorRouter.post("/tutor", createTutor);

/**
 * @swagger
 * /tutor:
 *   put:
 *     summary: Update a existing tutor
  *     parameters:
 *       - in: body
 *         name: tutor_data
 *         required: true
 *         description: 
 *         schema:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: "Adamastor"
 *                   lastName:
 *                     type: string
 *                     example: "De Oliveira"
 *                   email:
 *                     type: string
 *                     example: "adamastor.oliveira@email.com"
 *                   contactNumber:
 *                     type: string
 *                     example: "99-99999-9999"
 *                   routines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         dayOfWeek:
 *                           type: string
 *                           example: "1 (Monday)"
 *                         avaiablePeriods:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               startTime:
 *                                 type: string
 *                                 example: "10:00"
 *                               endTime:
 *                                 type: string
 *                                 example: "10:00"
 *     responses:
 *       201:
 *         description: Update a existing tutor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 */
tutorRouter.put("/tutor", updateTutor);

/**
 * @swagger
 * /tutor/{id}:
 *   delete:
 *     summary: Delete a existing tutor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       203:
 *         description: Delete a existing tutor
 */
tutorRouter.delete("/tutor/:id", deleteTutor);
