const urlApiChapters = "./assets/json/chapters.json";

//console.log(urlApiChapters);

$.get(urlApiChapters, function (response) {
  let chaptersList = response;

  //console.log(chaptersList)

const groupedByList = {}

chaptersList.forEach(entry => {

    const tomeNumber = entry.tome.tome_number;

    if(!groupedByList[tomeNumber]) {
        groupedByList[tomeNumber] = entry;
    }

});

const result = Object.values(groupedByList);

console.log(result);



  const ListChapters = result.map((chapters, index) => {

    
    console.log(chapters);

    return  `
            <li class="fadeIn">
                <a href="#" class="pokemon">
                    <span class="number slideInDown">#${chapters.tome.id}</span>
                    <h2 class="name slideInDown">${chapters.tome.title_lang}</h2>
                    <div class="detail">
                        <ol class="types">
                        <li class="type slideInLeft electric">Capítulo: </li>
                        <li class="type slideInLeft grass">Volume: </li>
                        <li class="type slideInLeft fire">Episódios: </li>
                        </ol>
                        <img src="${chapters.url_img}"
                            alt="" width="150" height="150" class="slideInRight">
                    </div>
                </a>
            </li>
            `;
  });
$("#chaptersList").html(ListChapters.join(""));

  //console.log(chaptersList);
});
