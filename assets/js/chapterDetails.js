// Obtenha a URL atual
const url = new URL(window.location.href);
//console.log(url.search);
// Obtenha o valor do parâmetro "id"
const idParam = url.searchParams.get("id");

let html = idParam;

//console.log(idParam);

const urlApiChapters = "assets/json/chapters.json";

function formatarData(dataString) {
    // Converte a string de data para um objeto Date
    const data = new Date(dataString);
  
    // Obtém o dia, mês e ano
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Os meses são zero-indexed, então somamos 1
    const ano = data.getFullYear();
  
    // Retorna a data formatada
    return `${dia}/${mes}/${ano}`;
  }


$.get(urlApiChapters, function (response) {
  let chaptersList = response;

 
  //console.log(chaptersList)      
  const ListChapters = chaptersList.map((chapters, index) => {
        

    if (chapters.tome.id == idParam) {

 

        const dataFormatada = formatarData(chapters.tome.tome_japan_date_publish);

    return  `
              <div class="pokemon-individual container">
                <div class="pokemon-infos">
                    <div class="pokemon-img slideInLeft">
                    <img  src="${chapters.url_img}"
                            width="300" height="300" alt="">
                    </div>
                    <div class="pokemon-conteudo">
                        <span class="number slideInDown" aria-label="número do Pokemon">#${chapters.id}</span>
                        <h1 class="name slideInRight">${chapters.title_lang}</h1>

                        <ol class="types fadeIn" aria-label="Lista de tipos do Pokemon">                            
                            <li class="type ${chapters.class_css}">${chapters.tome.title_lang}</li>
                        </ol>
                    </div>
                </div>
                <div class="pokemon-detail fadeIn">
                    <h2>Detalhes</h2>
                    <ul class="stats">

                        <li class="stat ">
                            <h3>
                                Nome: ${chapters.title_lang}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3>
                                Nome Original: ${chapters.title_lang}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3>
                                Publicado em : ${dataFormatada}
                            </h3>                            
                        </li>

                        <li class="stat ">
                            <h3 style="overflow: auto;">
                                Descrição:
                            </h3>
                        </li>
                        <p>${chapters.description_lang}</p>                         
                    </ul>
                </div>
            </div>

            `;
    }       

  }); 
  $("#loadOnePieceChapters").html(ListChapters.join(""));
});   