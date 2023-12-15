const ArrayMenuList = [
    {
        id: 0,
        image: "one-piece-the-sagas.png",
        url: "index.html",
        translate: [
          {
            id: 1,
            language: "pt-br",
            title: "Inicio",
          },
          {
            id: 2,
            language: "en",
            title: "Inicio",
          },
        ],
      },
  {
    id: 1,
    image: "one-piece-the-sagas.png",
    url: "sagas.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "Sagas",
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
        title: "Frutas",
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
        title: "Capítulos | Episódios",
      },
      {
        id: 2,
        language: "en",
        title: "the chapter",
      },
    ],
  },
//   {
//     id: 4,
//     image: "one-piece-volumes.png",
//     url: "sagas.html",
//     translate: [
//       {
//         id: 1,
//         language: "pt-br",
//         title: "volumes",
//       },
//       {
//         id: 2,
//         language: "en",
//         title: "volumes",
//       },
//     ],
//   },
//   {
//     id: 5,
//     image: "one-piece-the-episodes.png",
//     url: "sagas.html",
//     translate: [
//       {
//         id: 1,
//         language: "pt-br",
//         title: "os episódios",
//       },
//       {
//         id: 2,
//         language: "en",
//         title: "the episodes",
//       },
//     ],
//   },
  {
    id: 6,
    image: "one-piece-dials.png",
    url: "dials.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "Dials",
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
    url: "movies.html",
    translate: [
      {
        id: 1,
        language: "pt-br",
        title: "Filmes",
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
        title: "Espadas",
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
        title: "Hakis",
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
        title: "Gears do luffy",
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
        title: "Técnicas do luffy",
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
        title: "Tripulação",
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
        title: "Personagens",
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
        title: "Barcos",
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
        title: "Arcos",
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
        title: "Locais",
      },
      {
        id: 2,
        language: "en",
        title: "locations",
      },
    ],
  }
];


const menuListhtml = ArrayMenuList.map((menu, index) => {

    console.log(menu.translate[0].title);

  return `                 
            <li>
                <a href="${menu.url}">${menu.translate[0].title}</a>
            </li>                                         
         `;
});
$("#navList").html(menuListhtml.join(""));
  
