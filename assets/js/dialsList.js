const urlApiDials = "./assets/json/dials.json";

$.get(urlApiDials, function (response) {

    let dialsList = response;

    //console.log(dialsList);

    const ListDials = dialsList.map((dials, index) => {

        //console.log(index);

        return `
                <li class="fadeIn">
                    <a href="#" class="pokemon">
                        <span class="number slideInDown">#${index+1}</span>
                        <h2 class="name slideInDown">${dials.name}</h2>
                        <div class="detail">
                            <ol class="types">
                            <li class="type slideInLeft electric">Nome: ${dials.name}</li>                        
                            <li class="type slideInLeft fire">Tipo: ${dials.type}</li>
                            </ol>
                            <img src="${dials.url_img}"
                                alt="" width="150" height="150" class="slideInRight">
                        </div>
                    </a>
                </li>
        `;

    });    
    $("#onepieceList").html(ListDials.join(""));
});
