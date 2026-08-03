import {Schema, model} from "mongoose";

const userSchema = new Schema ({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
    },
    filePerfil: {
        type: String,
    },
    telefone: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    funcaoCargo: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

export default model("Usuario", userSchema);