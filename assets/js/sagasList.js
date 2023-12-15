//const urlApiSagas = "https://api2.api-onepiece.com/v2/sagas/en";

const urlApiSagas = "assets/json/sagas.json";

//console.log(urlApiSagas);

$.get(urlApiSagas, function (response) {
  let sagasList = response;
  //console.log(sagasList);

  const sagaImg = {
    1: "east_blue.png",
    2: "alabasta.png",
    3: "skypiea.png",
    4: "water_7.png",
    5: "thriller_bark.png",
    6: "summit_war.png",
    7: "fishman_island.png",
    8: "dressrosa.png",
    9: "yonko.png",
  };

  const titlesLang = {
    1: "East Blue",
    2: "Alabasta",
    3: "Skypiea",
    4: "Water 7 | CP9",
    5: "Thriller Bark",
    6: "Guerra de Marineford",
    7: "Ilha dos Homens-Peixe",
    8: "Aliança Pirata",
    9: "Yonkou",
  }

  const listSagas = sagasList.map((saga, index) => {
    //console.log(saga.title);

    const sagaImgUrl = sagaImg[saga.saga_number] || '';
    const sagaTitle = titlesLang[saga.saga_number] || '';
    
    return `    
    <li class="fadeIn">
        <a href="#" class="pokemon">
            <span class="number slideInDown">#${saga.saga_number}</span>
            <h2 class="name slideInDown">${sagaTitle}</h2>
            <div class="detail">
                <ol class="types">
                <li class="type slideInLeft electric">Capítulo: ${saga.saga_chapitre}</li>
                <li class="type slideInLeft grass">Volume: ${saga.saga_volume}</li>
                <li class="type slideInLeft fire">Episódios: ${saga.saga_episode}</li>                
                </ol>
                <img src="./assets/img/${sagaImgUrl}"
                    alt="" width="156" height="144" class="slideInRight">
            </div>
        </a>
    </li>
    `;
  });

  $("#onepieceList").html(listSagas.join(""));
}).fail(function (error) {
  console.error("Erro ao carregar a lista de Pokémon:", error);
  $("#onepieceList").html(`<p>Erro ao carregar a lista de One Piece.</p>`);
});
