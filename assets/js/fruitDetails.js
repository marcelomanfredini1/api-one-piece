// Obtenha a URL atual
const url = new URL(window.location.href);
//console.log(url.search);
// Obtenha o valor do parâmetro "id"
const idParam = url.searchParams.get("id");

let html = idParam;

//const urlApiFruits = "https://api2.api-onepiece.com/v2/fruits/en";

const urlApiFruits = "assets/json/fruits.json";

//console.log(urlApiFruits);

$.get(urlApiFruits, function (response) {
  let fruitsList = response;
  //console.log(fruitsList);

  const listFruits = fruitsList.map((fruit, index) => {
    if (fruit.id == idParam) {
      //console.log(fruit);

      const fruitsImg =
        fruit.filename === "https://images.api-onepiece.com/fruits/"
          ? "./assets/img/one-piece.png"
          : fruit.filename;
      const classImage =
        fruit.filename === "https://images.api-onepiece.com/fruits/"
          ? 'style="opacity: 0.15"'
          : "";

      const types = {
        Paramecia: "poison",
        Logia: "rock",
        Zoan: "fairy",
        "Zoan Antique": "ice",
        "Zoan Mythique": "grass",
        Smile: "flying",
      };

      const fruitName =
        fruit.roman_name === undefined ? fruit.name : fruit.roman_name;
      const fruitType = fruit.type;

      if (types.hasOwnProperty(fruitType)) {
        const correspondingType = types[fruitType];

        return `
      <div class="pokemon-individual container">
                <div class="pokemon-infos">
                    <div class="pokemon-img slideInLeft">
                    <img ${classImage} src="${fruitsImg}"
                            width="300" height="300" alt="${fruitName}">
                    </div>
                    <div class="pokemon-conteudo">
                        <span class="number slideInDown" aria-label="número do Pokemon">#${fruit.id}</span>
                        <h1 class="name slideInRight">${fruitName}</h1>

                        <ol class="types fadeIn" aria-label="Lista de tipos do Pokemon">                            
                            <li class="type ${correspondingType}">${fruit.type}</li>
                        </ol>
                    </div>
                </div>
                <div class="pokemon-detail fadeIn">
                    <h2>Detalhes</h2>
                    <ul class="stats">

                        <li class="stat ">
                            <h3>
                                Nome: ${fruitName}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3>
                                Nome Original: ${fruit.name}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3 style="overflow: auto;">
                                Descrição:
                            </h3>
                        </li>
                        <p>${fruit.description_lang}</p>                         
                    </ul>
                </div>
            </div>
            
            `;
      } else {
        console.log(`Tipo de fruta desconhecido: ${fruitType}`);
      }
    }
  });

  $("#loadOnePieceFruit").html(listFruits.join(""));
}).fail(function (error) {
  console.error("Erro ao carregar a lista de Pokémon:", error);
  $("#loadOnePieceFruit").html(`<p>Erro ao carregar a lista de One Piece.</p>`);
});
