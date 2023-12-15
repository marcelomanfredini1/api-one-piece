//const urlApiFruits = "https://api2.api-onepiece.com/v2/fruits/en";

 const urlApiFruits = "./assets/json/fruits.json";

//console.log(urlApiFruits);

$.get(urlApiFruits, function (response) {
  let fruitsList = response;
  //console.log(fruitsList);

  const listFruits = fruitsList.map((fruit, index) => {
    //console.log(fruit.filename);

    // const sagaImgUrl = sagaImg[saga.saga_number] || '';
    // const sagaTitle = titlesLang[saga.saga_number] || '';

    const fruitsImg =
      fruit.filename === "https://images.api-onepiece.com/fruits/"
        ? "./assets/img/one-piece.png"
        : fruit.filename;
    const classImage =
      fruit.filename === "https://images.api-onepiece.com/fruits/"
        ? 'style="opacity: 0.15"'
        : "";

        
    const fruitName = fruit.roman_name === undefined ? fruit.name : fruit.roman_name;
    const fruitType = fruit.type
    const types = {

        "Paramecia" : "poison",
        "Logia" : "rock",
        "Zoan": "fairy",
        "Zoan Antique": "ice",
        "Zoan Mythique": "grass",
        "Smile": "flying",

      };

      if (types.hasOwnProperty(fruitType)) {
        const correspondingType = types[fruitType];
        //console.log(`Corresponding type for ${fruitType}: ${correspondingType}`);
        const typeClass = correspondingType;
        
        return `    
        <li class="fadeIn">
            <a href="details-fruit.html?id=${fruit.id}" class="pokemon">
                <span class="number slideInDown">#${fruit.id}</span>
                <h2 class="name slideInDown">${fruitName}</h2>
                <div class="detail">
                    <ol class="types">
                    <li class="type slideInLeft electric">${fruitName}</li>
                    <li class="type slideInLeft ${correspondingType}">${fruit.type}</li>                                  
                    </ol>
                    <img ${classImage} src="${fruitsImg}"
                        alt="" width="156" height="144" class="slideInRight">
                </div>
            </a>
        </li>
        `;
        // Faça o que quiser com a variável correspondingType
      } else {
        console.log(`Tipo de fruta desconhecido: ${fruitType}`);
      }
 
    //const fruitType = fruit.type === '' ? '' : fruit.type;
    

    
  });

  $("#onepieceList").html(listFruits.join(""));
}).fail(function (error) {
  console.error("Erro ao carregar a lista de Pokémon:", error);
  $("#onepieceList").html(`<p>Erro ao carregar a lista de One Piece.</p>`);
});
