const urlApiChapters = "./assets/json/chapters.json";

//console.log(urlApiChapters);

$.get(urlApiChapters, function (response) {
  let chaptersList = response;

  //console.log(chaptersList)

const groupedByList = {}

//console.log(chaptersList);

const contagemPorTomeNumber = {};

chaptersList.forEach(entry => {

  //console.log(entry.tome.tome_number);



    const tomeNumber = entry.tome.tome_number;
     contagemPorTomeNumber[tomeNumber] = (contagemPorTomeNumber[tomeNumber] || 0) + 1;
    //console.log(tomeNumber);

    if(!groupedByList[tomeNumber]) {
        groupedByList[tomeNumber] = entry;
    }
    
});




const result = Object.values(groupedByList);

//console.log(result);



  const ListChapters = result.map((chapters, index) => {
    const { tome } = chapters;
    const { tome_number } = tome;
    
    // Acesse a contagem para o tome_number específico
    const contagemTomeNumber = contagemPorTomeNumber[tome_number];
    //console.log(contagemTomeNumber);

    return  `
            <li class="fadeIn">
                <a href="details-chapter.html?id=${chapters.tome.id}" class="pokemon">
                    <span class="number slideInDown">#${chapters.tome.id}</span>
                    <h2 class="name slideInDown">${chapters.tome.title_lang}</h2>
                    <div class="detail">
                        <ol class="types">
                        <li class="type slideInLeft electric">Capítulo: ${chapters.tome.tome_number}</li>                        
                        <li class="type slideInLeft fire">Episódios: ${contagemTomeNumber}</li>
                        </ol>
                        <img src="${chapters.url_img}"
                            alt="" width="150" height="150" class="slideInRight">
                    </div>
                </a>
            </li>
            `;
  });
$("#onepieceList").html(ListChapters.join(""));

  //console.log(chaptersList);
});
