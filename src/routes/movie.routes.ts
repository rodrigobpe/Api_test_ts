import { Router } from "express";
import MovieController from "../controllers/MovieController";
const movieRoutes = Router();

movieRoutes.post("/", MovieController.handle)

export { movieRoutes };