
const projetos = [
    {
      titulo: "Site Prototipando a quebrada",
      imagem: "../img/capas-projetos/prototipando.png",
      tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
      descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa earum quidem tenetur sit. Minima quis.",
      repositorio: "",
      site: ""
    },
    {
      titulo: "Travelgram",
      imagem: "../img/capas-projetos/Travelgram.png",
      tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
      descricao: "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo. Realizado durante curso na Rocketseat.",
      repositorio: "",
      site: ""
    },
    {
      titulo: "Super Mario Bros",
      imagem: "../img/capas-projetos/super-mario.png",
      tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
      descricao: "Super Mario Bros é uma vibrante landing page dedicada ao icônico filme inspirado na clássica franquia de jogos da Nintendo.",
      repositorio: "",
      site: "https://the-super-mario-bros-movie.vercel.app/"
    },
    {
      titulo: "Site lista de Filmes",
      imagem: "../img/capas-projetos/filmes.png",
      tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
      descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa earum quidem tenetur sit. Minima quis.",
      repositorio: "",
      site: "https://site-paq-2-0.vercel.app/index.html"
    },
    {
      titulo: "Imover transportadora",
      imagem: "../img/capas-projetos/imover.png",
      tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
      descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa earum quidem tenetur sit. Minima quis.",
      repositorio: "",
      site: ""
    },
    {
      titulo: "Portifólio Layse gabrielly",
      imagem: "../img/capas-projetos/portifolio.png",
      tecnologias: ["fab fa-html5", "fab fa-css3-alt"],
      descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa earum quidem tenetur sit. Minima quis.",
      repositorio: "",
      site: ""
    }
  ];
  
// Certifique-se de que o script é executado após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o array de projetos está disponível
    if (typeof projetos !== "undefined" && Array.isArray(projetos)) {
      // Seleciona o container onde os projetos serão adicionados
      const projetosContainer = document.querySelector(".projetos-container");
  
      // Função para criar os cards de projetos
      function criarCardProjeto(projeto) {
        // Cria o elemento div para o card do projeto
        const projetoItem = document.createElement("div");
        projetoItem.classList.add("projetos-item");
  
        // Adiciona a imagem do projeto
        const imagem = document.createElement("img");
        imagem.classList.add("projeto-capa");
        imagem.src = projeto.imagem;
        imagem.alt = projeto.titulo;
        projetoItem.appendChild(imagem);
  
        // Adiciona o título do projeto
        const titulo = document.createElement("h3");
        titulo.textContent = projeto.titulo;
        projetoItem.appendChild(titulo);
  
        // Cria o container para as tecnologias usadas
        const techUsadas = document.createElement("div");
        techUsadas.classList.add("tech-usadas");
  
        // Adiciona os ícones das tecnologias
        projeto.tecnologias.forEach((tech) => {
          const li = document.createElement("li");
          const icon = document.createElement("i");
          icon.className = tech;
          li.appendChild(icon);
          techUsadas.appendChild(li);
        });
  
        projetoItem.appendChild(techUsadas);
  
        // Adiciona a descrição do projeto
        const descricao = document.createElement("p");
        descricao.textContent = projeto.descricao;
        projetoItem.appendChild(descricao);
  
        // Cria o container para os botões do projeto
        const bntsProjetoItem = document.createElement("div");
        bntsProjetoItem.classList.add("bnts-projeto-item");
  
        // Adiciona o botão do repositório
        const linkRepositorio = document.createElement("a");
        linkRepositorio.href = projeto.repositorio;
        linkRepositorio.textContent = "Repositório";
        bntsProjetoItem.appendChild(linkRepositorio);
  
        // Adiciona o botão do site
        const linkSite = document.createElement("a");
        linkSite.href = projeto.site;
        linkSite.textContent = "Ver site";
        linkSite.target = "_blank";
        bntsProjetoItem.appendChild(linkSite);
  
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
  