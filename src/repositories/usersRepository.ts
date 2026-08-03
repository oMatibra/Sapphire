import prisma from "../database/prisma.js";

export class usersRepository {

    async buscarPorEmail(email: string) {

        return prisma.usuario.findUnique({
            where: {
                email,
            },
        });
    }

    async criar(users:any){

        return prisma.usuario.create({
            data: users
        })
    }
}