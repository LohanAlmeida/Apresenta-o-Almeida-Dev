/* ------ DARK / LIGHT MODE ------ */
const toggle = document.getElementById("modeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
};

/* ------ PARTÍCULAS ------ */
const particles = document.getElementById("particles");
for (let i = 0; i < 70; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 5 + Math.random() * 10 + "s";
  p.style.opacity = 0.3 + Math.random() * 0.7;
  particles.appendChild(p);
}

/* ------ PROJETOS ------ */
const meusProjetos = [
  {
    nome: "Batalha Espacial",
    descricao: "Jogo Nave espacial tipo Atari",
    tech: "HTML, CSS, JS",
    img: "https://cdn1.epicgames.com/spt-assets/4248fe5a4bf04f4a971391171c36c35c/spacebattle-11h43.png",
    link: "https://github.com/LohanAlmeida/Jogo-nave-espacial-tipo-Atari"
  },
  {
    nome: "SkillBoost",
    descricao: "Front-End SkillBoost",
    tech: "HTML, CSS, JS, JSON",
    img: "https://media.licdn.com/dms/image/v2/D4E0BAQEErCzioY_diw/company-logo_200_200/company-logo_200_200/0/1720707626453/boost_skills_logo?e=2147483647&v=beta&t=ytvCkcOr6ullJvQxjWCisoHyC924aX_Ze_ZvXeyb26o",
    link: "https://github.com/LohanAlmeida/SkillBoost"
  },
  {
    nome: "Formulário de Login",
    descricao: "Formulário de login animado",
    tech: "HTML, CSS",
    img: "https://static.vecteezy.com/ti/vetor-gratis/p3/12956528-formulario-de-registro-e-pagina-de-formulario-de-login-modeloial-para-seu-projeto-conceito-de-interface-do-usuario-do-site-vetor.jpg",
    link: "https://github.com/LohanAlmeida/Formulario-de-login-animado---CSS"
  },
  {
    nome: "Filmes Flix",
    descricao: "Insira seu filme favorito.",
    tech: "HTML, CSS, JS",
    img: "https://i.pinimg.com/564x/3a/b7/e4/3ab7e4b22a791e4748d72432b3f8f339.jpg",
    link: "https://github.com/LohanAlmeida/FilmesFlix"
  },
  {
    nome: "Projeto Óticas",
    descricao: "Em andamento",
    tech: "HTML, CSS, JS",
    img: "https://crmotica.com/images/blog/exposicao-oculos-precos-loja-otica-precificacao-para-oticas-definir-margens-lucrativas-atrativas.webp",
    link: "https://github.com/LohanAlmeida/Projeto-em-andamento-"
  }
];

/* ------ CARROSSEL + CARDS ------ */
const track = document.getElementById("carouselTrack");
const cards = document.getElementById("projectCards");

const total = meusProjetos.length;
const step = 360 / total;
let angle = 0;

meusProjetos.forEach((repo, i) => {
98
  /* CARROSSEL */
  const item = document.createElement("div");
  item.classList.add("carousel-item");
  item.style.transform = `rotateY(${i * step}deg) translateZ(420px)`;

  item.innerHTML = `
    <img src="${repo.img}" />
    <h3>${repo.nome}</h3>
    <p>${repo.descricao}</p>
  `;

  item.onclick = () => window.open(repo.link, "_blank");

  track.appendChild(item);

  /* CARDS */
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${repo.nome}</h3>
    <p>${repo.descricao}</p>
    <p style="opacity:.6;font-size:13px;">${repo.tech}</p>
    <a href="${repo.link}" target="_blank" style="color:#2D6BFF;">Ver no GitHub →</a>
  `;

  cards.appendChild(card);
});

/* CONTROLES */
document.querySelector(".carousel-next").onclick = () => {
  angle -= step;
  track.style.transform = `rotateY(${angle}deg)`;
};

document.querySelector(".carousel-prev").onclick = () => {
  angle += step;
  track.style.transform = `rotateY(${angle}deg)`;
};
