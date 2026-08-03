import bcrypt from "bcrypt";
import { usersRepository } from "../repositories/usersRepository.js";
import { users } from "../entities/users.js";

export class usersService {
    repository = new usersRepository();

    async criar(dto:any){

        const existe = await this.repository.buscarPorEmail(dto.email);

        if(existe){
            throw new Error("E-mail já cadastrado");
        }

        const hash = await bcrypt.hash(dto.senha, 10);

        const user = new users(dto.nome, dto.email, hash);

        return this.repository.criar({
            nome: user.nome,
            email: user.email,
            senhaHash: user.getSenhaHash()
        });
    }
}