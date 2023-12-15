// Obtenha a URL atual
const url = new URL(window.location.href);
//console.log(url.search);
// Obtenha o valor do parâmetro "id"
const idParam = url.searchParams.get("id");

let html = idParam;

//const urlApiMovies = "https://api.api-onepiece.com/v2/movies/en";

const urlApiMovies = "assets/json/movies.json";

//console.log(urlApiMovies);

function formatarData(dataString) {
  // Converte a string de data para um objeto Date
  const data = new Date(dataString);

  // Obtém o dia, mês e ano
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Os meses são zero-indexed, então somamos 1
  const ano = data.getFullYear();

  // Retorna a data formatada
  return `${dia}/${mes}/${ano}`;
}

$.get(urlApiMovies, function (response) {
  let moviesList = response;
  //console.log(moviesList);

  const listMovies = moviesList.map((movie, index) => {
    if (movie.id == idParam) {
      //console.log(movie);

      const dataFormatada = formatarData(movie.release_date);


      //   const types = {
      //     Paramecia: "poison",
      //     Logia: "rock",
      //     Zoan: "fairy",
      //     "Zoan Antique": "ice",
      //     "Zoan Mythique": "grass",
      //     Smile: "flying",
      //   };

     

      return `
      <div class="pokemon-individual container">
      <button class="btn-back" onclick="history.back()">Voltar</button>
                <div class="pokemon-infos">
                    <div class="pokemon-img slideInLeft">
                    <img src="${movie.url_img}"
                            width="300" height="300" alt="${movie.title_lang}">
                            
                    </div>

                    <div class="pokemon-conteudo">
                        <span class="number slideInDown" aria-label="número do One Piece">#${movie.id}</span>
                        <h1 class="name slideInRight">${movie.title_lang}</h1>

                        <ol class="types fadeIn" aria-label="Lista de Filmes">                            
                            <li class="type fairy">${movie.saga.title}</li>
                        </ol>
                    </div>
                </div>
                <div class="pokemon-detail fadeIn">
                    <h2>Detalhes</h2>
                    <ul class="stats">

                        <li class="stat ">
                            <h3>
                                Nome: ${movie.title_lang}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3>
                                Nome Original: ${movie.title}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3>
                                Data de Lançamento: ${dataFormatada}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3 style="overflow: auto;">
                                Descrição:
                            </h3>
                        </li>
                        <p>${movie.description_lang}</p>                         
                    </ul>
                </div>
            </div>
            
            `;
    } else {
      //console.log(`Tipo de filme desconhecido: ${movie.title}`);
    }
  });

  $("#loadOnePieceMovie").html(listMovies.join(""));
}).fail(function (error) {
  console.error("Erro ao carregar a lista de One Piece:", error);
  $("#loadOnePieceMovie").html(`<p>Erro ao carregar a lista de One Piece.</p>`);
});
