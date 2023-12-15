//const urlApiMovies = "https://api.api-onepiece.com/v2/movies/en";

const urlApiMovies = "assets/json/movies.json";

//console.log(urlApiSagas);

$.get(urlApiMovies, function (response) {
  let moviesList = response;
  //console.log(moviesList);

  const listMovies = moviesList.map((movie, index) => {
    if (movie.saga) {
      const { title, saga } = movie;

      const { saga_number, saga_chapitre, saga_volume, saga_episode } =
        saga || {};

      //console.log(saga)

      return `    
    <li class="fadeIn">
        <a href="details-movie.html?id=${movie.id}" class="pokemon">
            <span class="number slideInDown">#${movie.id}</span>
            <h2 class="name slideInDown">${movie.title_lang}</h2>
            <div class="detail">
                <ol class="types">
                <li class="type slideInLeft water">Saga: ${
                  saga.title || "N/A"
                }</li>
                <li class="type slideInLeft electric">Capítulo: ${
                  saga_chapitre || "N/A"
                }</li>
                <li class="type slideInLeft fire">Episódios: ${
                  saga_episode || "N/A"
                }</li>                
                <li class="type slideInLeft grass">Volume: ${
                  saga_volume || "N/A"
                }</li>                
                </ol>
                <img src="${movie.url_img}"
                    alt="" width="156" height="144" class="slideInRight">
            </div>
        </a>
    </li>
    `;
    } else {
      return {};
    }
  });

  $("#onepieceList").html(listMovies.join(""));
}).fail(function (error) {
  console.error("Erro ao carregar a lista de Pokémon:", error);
  $("#onepieceList").html(`<p>Erro ao carregar a lista de One Piece.</p>`);
});
