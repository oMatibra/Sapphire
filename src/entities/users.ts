export class users {
    
    constructor(
        public nome: string,
        public email: string,
        private senhaHash: string
    ){}

    alterarNome(nome: string){
        this.nome = nome;
    }
    
    alterarSenha(senha: string){
        this.senhaHash = senha;
    }

    getSenhaHash(){
        return this.senhaHash;
    }
}