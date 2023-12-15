// Função para realizar a pesquisa
function search() {
    // Obtém o valor digitado no campo de pesquisa
    var searchTerm = $('#search').val().toLowerCase();

    // Percorre os itens da lista e oculta/mostra com base na pesquisa
    $('#onepieceList li').each(function () {
        var listItemText = $(this).text().toLowerCase();

        if (listItemText.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Adiciona um ouvinte de evento para chamar a função de pesquisa ao digitar
$('#search').on('input', search);