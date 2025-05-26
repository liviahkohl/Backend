let produtoEmbalado = {
    nome: "Laptop HP",
    categoria:"eletronicos",
    peso: 1.5,
    preco:3500.00
    }
    console.log(`O produto embalado ${produtoEmbalado.nome} da categoria ${produtoEmbalado.categoria} pesando ${produtoEmbalado.peso} kg, esta a venda por R$ ${produtoEmbalado.preco.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`);