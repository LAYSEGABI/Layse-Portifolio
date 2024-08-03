const projetos = [
  {
    titulo: "Site PAQ design novo",
    imagem: "assets/img/capas-projetos/prototipando.png",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
    descricao: "Prototipando a Quebrada é uma ONG, me inspirei no próprio site da organização para fazer uma nova versão dele.",
    repositorio: "https://github.com/LAYSEGABI/Site-PAQ-2.0",
    site: "https://site-paq-2-0.vercel.app/index.html"
  },
  {
    titulo: "Portifólio Layse gabrielly",
    imagem: "assets/img/capas-projetos/portifolio.png",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt",  "fab fa-js-square"],
    descricao: "Esse foi meu segundo portifólio, tentei trazer um aspecto geek, ele é totalmente responsivo.",
    repositorio: "https://github.com/LAYSEGABI/Portifolio-Layse-Gabrielly-azul",
    site: "https://portifolio-layse-gabrielly-azul.vercel.app/"
  },
  {
    titulo: "Super Mario Bros",
    imagem: "assets/img/capas-projetos/super-mario.png",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
    descricao: "A landing page Super Mario Bros é uma vibrante página dedicada ao icônico filme inspirado na clássica franquia de jogos da Nintendo.",
    repositorio: "https://github.com/LAYSEGABI/The-Super-Mario-Bros-movie",
    site: "https://the-super-mario-bros-movie.vercel.app/"
  },
  {
    titulo: "Imover transportadora",
    imagem: "assets/img/capas-projetos/imover.png",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
    descricao: "Landing page de uma empresa de transporte, a ideia de empresa foi desenvolvida em uma startup que eu fiz parte.",
    repositorio: "https://github.com/LAYSEGABI/iMoveer",
    site: "https://imoveer.vercel.app/"
  },
  {
    titulo: "Site lista de Animes",
    imagem: "assets/img/capas-projetos/lista-animes.png",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
    descricao: "Durante um curso da Alura, desenvolvi um site de livros que me deu a inspiração para esse site. Em vez de livros, resolvi colocar meus animes favoritos.",
    repositorio: "https://github.com/LAYSEGABI/Site-lista-de-animes",
    site: "https://site-lista-de-animes.vercel.app/"
  },
  {
    titulo: "Travelgram",
    imagem: "assets/img/capas-projetos/Travelgram.png",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
    descricao: "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo. Realizado durante curso na Rocketseat.",
    repositorio: "https://github.com/LAYSEGABI/Travelagem",
    site: "https://travelagem.vercel.app/"
  }
];

document.addEventListener("DOMContentLoaded", function () {

  if (typeof projetos !== "undefined" && Array.isArray(projetos)) {
    const projetosContainer = document.querySelector(".projetos-container");

    function criarCardProjeto(projeto) {

      // Cria o elemento div para o card do projeto
      const projetoItem = document.createElement("div");
      projetoItem.classList.add("projetos-item");
      projetoItem.setAttribute('role', 'group');
      projetoItem.setAttribute('aria-labelledby', `card-title-${projeto.titulo}`);
      projetoItem.setAttribute('aria-describedby', `card-desc-${projeto.titulo}`);


      // Adiciona a imagem do projeto
      const imagem = document.createElement("img");
      imagem.classList.add("projeto-capa");
      imagem.src = projeto.imagem;
      imagem.alt = projeto.titulo;
      projetoItem.appendChild(imagem);

      // Adiciona o título do projeto
      const titulo = document.createElement("h3");
      titulo.textContent = projeto.titulo;
      titulo.id = `card-title-${projeto.titulo}`;
      projetoItem.appendChild(titulo);

      // cria o container para as tech usadas
      const techUsadas = document.createElement("div");
      techUsadas.classList.add("tech-usadas");

      // adiciona os ícones das tech
      projeto.tecnologias.forEach((tech) => {
        const li = document.createElement("li");
        const icon = document.createElement("i");
        icon.className = tech;
        li.appendChild(icon);
        techUsadas.appendChild(li);
      });

      projetoItem.appendChild(techUsadas);

      // adiciona a descrição do projeto
      const descricao = document.createElement("p");
      descricao.textContent = projeto.descricao;
      descricao.id = `card-desc-${projeto.titulo}`;
      projetoItem.appendChild(descricao);

      // cria o container para os botões do projeto
      const bntsProjetoItem = document.createElement("div");
      bntsProjetoItem.classList.add("bnts-projeto-item");

      // adiciona o botão pra visitar o site
      const linkSite = document.createElement("a");
      linkSite.href = projeto.site;
      linkSite.textContent = "Ver site";
      linkSite.setAttribute('aria-label', `${projeto.titulo} ${projeto.descricao} visitar ${projeto.titulo}`)
      linkSite.target = "_blank";
      bntsProjetoItem.appendChild(linkSite);


      // adiciona o botão do repositório
      const linkRepositorio = document.createElement("a");
      linkRepositorio.href = projeto.repositorio;
      linkRepositorio.textContent = "Repositório";
      linkRepositorio.setAttribute('aria-label', `visitar o repositório do ${projeto.titulo}`)
      bntsProjetoItem.appendChild(linkRepositorio);

      projetoItem.appendChild(bntsProjetoItem);

      // Adiciona o card do projeto ao container
      projetosContainer.appendChild(projetoItem);
    }

    // Itera sobre o array de projetos e cria os cards
    projetos.forEach(criarCardProjeto);
  } else {
    console.error("Os dados dos projetos não foram carregados corretamente.");
  }
});
