import {Schema, model} from "mongoose";

const userSchema = new Schema ({
    titulo: {
        type: String,
        required: true,
        unique: true,
    },
    descricao: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

export default model("TipoUsuario", userSchema);