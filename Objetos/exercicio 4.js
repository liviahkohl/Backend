class veiculo {
    constructor(marca, modelo, ano) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
    }
    
    exibirDetalhes() {
    return `${this.marca} do modelo ${this.modelo} feito no ano de ${this.ano}`;
    }
    }
    
    const carro = new veiculo("Toyota", "Corolla", 2022);
    const motocicleta = new veiculo("Honda","CBR 600RR", 2021 );
    console.log("\nQuestão 4 - Veiculo\n",carro.exibirDetalhes());
    console.log(motocicleta.exibirDetalhes())