import { User } from '@prisma/client'
import { AppError } from '../../errors/AppError';
import { prisma } from "../../prisma/client";
import { CreateUserDTO } from "./dtos/CreateUserDtos";
export class CreateUser {
    async execute({ name, email }: CreateUserDTO): Promise<User> {
        //verificar se o usuário já existe
        const userAlreadExist = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadExist) {
            // erro
            throw new AppError("User already exists!");
        }
        //criar usuário
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user;
    }
}