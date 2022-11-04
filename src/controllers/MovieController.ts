import { Request, Response } from "express";
import { CreateMovie } from '../models/movies/CreateMovie'

class MovieController {
    async handle(req: Request, res: Response) {
        const { title, duration,realese_date } = req.body;
        const createMovie = new CreateMovie();
        const result = await createMovie.store({ title, duration,realese_date });
        return res.status(201).json(result);
    }
}
export default new MovieController();