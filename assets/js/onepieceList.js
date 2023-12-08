const menuList = [
  {
    id: 1,
    image: "one-piece-the-sagas.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "as sagas",
      },
      {
        id: 2,
        language: "en",
        title: "the sagas",
      },
    ],
  },
  {
    id: 2,
    image: "one-piece-the-fruits.png",
    url: "fruits.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "as frutas",
      },
      {
        id: 2,
        language: "en",
        title: "the fruits",
      },
    ],
  },
  {
    id: 3,
    image: "one-piece-the-chapter.png",
    url: "chapters.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "os capítulos",
      },
      {
        id: 2,
        language: "en",
        title: "the chapter",
      },
    ],
  },
  {
    id: 4,
    image: "one-piece-volumes.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "volumes",
      },
      {
        id: 2,
        language: "en",
        title: "volumes",
      },
    ],
  },
  {
    id: 5,
    image: "one-piece-the-episodes.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "os episódios",
      },
      {
        id: 2,
        language: "en",
        title: "the episodes",
      },
    ],
  },
  {
    id: 6,
    image: "one-piece-dials.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "dials",
      },
      {
        id: 2,
        language: "en",
        title: "dials",
      },
    ],
  },
  {
    id: 7,
    image: "one-piece-the-films.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "os filmes",
      },
      {
        id: 2,
        language: "en",
        title: "the films",
      },
    ],
  },
  {
    id: 8,
    image: "one-piece-the-swords.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "as espadas",
      },
      {
        id: 2,
        language: "en",
        title: "the swords",
      },
    ],
  },
  {
    id: 9,
    image: "one-piece-hakis.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "hakis",
      },
      {
        id: 2,
        language: "en",
        title: "hakis",
      },
    ],
  },
  {
    id: 10,
    image: "one-piece-gear-luffy.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "gears do luffy",
      },
      {
        id: 2,
        language: "en",
        title: "luffy gear",
      },
    ],
  },
  {
    id: 11,
    image: "one-piece-luffy-techniques.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "técnicas do luffy",
      },
      {
        id: 2,
        language: "en",
        title: "luffy techniques",
      },
    ],
  },
  {
    id: 12,
    image: "one-piece-the-crews.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "a tripulação",
      },
      {
        id: 2,
        language: "en",
        title: "the crews",
      },
    ],
  },
  {
    id: 13,
    image: "one-piece-the-characters.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "os personagens",
      },
      {
        id: 2,
        language: "en",
        title: "the characters",
      },
    ],
  },
  {
    id: 14,
    image: "one-piece-the-boats.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "os barcos",
      },
      {
        id: 2,
        language: "en",
        title: "the boats",
      },
    ],
  },
  {
    id: 15,
    image: "one-piece-bows.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "arcos",
      },
      {
        id: 2,
        language: "en",
        title: "bows",
      },
    ],
  },
  {
    id: 16,
    image: "one-piece-locations.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "os locais",
      },
      {
        id: 2,
        language: "en",
        title: "locations",
      },
    ],
  },
];

const menu = document.getElementById("onepieceList");

const listMenu = menuList.map((menu, index) => {

  return `    
    <li class="fadeIn">
        <a href="${menu.url}" class="pokemon">
            <span class="number slideInDown">#${menu.translate[0].title}</span>
            <h2 class="name slideInDown">${menu.translate[0].title}</h2>
            <div class="detail">
                <ol class="types">
                    
                </ol>
                <img src="./assets/img/${menu.image}"
                    alt="" width="156" height="156" class="slideInRight">
            </div>
        </a>
    </li>
 `;
});

const htmlString = listMenu.join("");

menu.innerHTML = htmlString
