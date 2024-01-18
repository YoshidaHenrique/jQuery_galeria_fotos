$(document).ready(function() {
    $('header button').click(function () {
        $('form').slideDown(); //desliza como slide quando acionado o botão do header

    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //função igual value
        const novoItem = $('<li style="display: none"></li>'); //o display none faz com que a imagem não apareça mesmo colando url e dando submit, mas aparece com a função fade
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //append pega o que ta dentro da funcao e adiciona na cons novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target"_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //faz a imagem aparecer com delay de 1000 milisegundos 
        $('#endereco-imagem-nova').val('') //limpa a url no form apos dar o submit
    })

})