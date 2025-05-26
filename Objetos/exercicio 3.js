class Imovel {
    constructor(quarto, tipos, enderecos) {
    this.quarto = quarto;
    this.tipos = tipos;
    this.enderecos = enderecos;
    }
    
    exibirInformacoes() {
    return `${this.tipos} com ${this.quarto} quartos, localizado em ${this.enderecos}`;
    }
}
    
    let casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
    let apartamentos = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
    
    console.log(casa.exibirInformacoes());
    console.log(apartamentos.exibirInformacoes());