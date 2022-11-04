import { prisma } from "../../prisma/client";
import { Movies } from "@prisma/client";
import { CreateMovieDtos } from "./dtos/CreateMovieDtos";
import { AppError } from "../../errors/AppError";

export class CreateMovie{
    async store({title,duration,realese_date}:CreateMovieDtos): Promise<Movies>{
        const movieAlreadyExist = await prisma.movies.findUnique({
            where:{
                title,
            }
        });
        if (movieAlreadyExist){
            throw new AppError("Movie already exists!");
        }

        const movie = await prisma.movies.create({
            data:{
                title,
                duration,
                realese_date
            },
        });
        return movie
    }
}