// Exemplo de dados de receitas
const receitas = [
    {
        imagem: "https://example.com/imagem1.jpg",
        alternativo: "Imagem da Receita 1",
        titulo: "Receita 1",
        texto: "Descrição breve da Receita 1."
    },
    {
        imagem: "https://example.com/imagem2.jpg",
        alternativo: "Imagem da Receita 2",
        titulo: "Receita 2",
        texto: "Descrição breve da Receita 2."
    },
    {
        imagem: "https://example.com/imagem3.jpg",
        alternativo: "Imagem da Receita 3",
        titulo: "Receita 3",
        texto: "Descrição breve da Receita 3."
    }
];

const cardReceita = document.querySelector('#lista-receitas');

// Verifica se o elemento foi encontrado antes de manipular o DOM
if (cardReceita) {
    // Usando um método mais eficiente para concatenar HTML
    const cardHTML = receitas.map(receita => `
        <article class="card borda-cor-especial card-largura p-0 m-4 col-12 col-sm-4">
            <img class="card-img-top imagem-card" src="${receita.imagem}" alt="${receita.alternativo}">
            <div class="card-body">
                <h4 class="card-title">${receita.titulo}</h4>
                <p class="card-text">${receita.texto}</p>
                <a href="#" class="btn botao-cor-especial">Veja a receita</a>
            </div>
        </article>
    `).join('');

    cardReceita.innerHTML = cardHTML;
} else {
    console.error('Elemento #lista-receitas não encontrado no DOM.');
}
