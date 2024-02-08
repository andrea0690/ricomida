
$(document).ready(function () {

    //Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //Evento
    $('#enviarCorreo').on('click', function () {
        alert('El correo fue enviado correctamente...')
    })

    // Selector de etiqueta
    $('h2.ingredientes, h2.preparacion').on('dblclick', function () {
        $(this).css({
            "color": "red",
        });
    })
    $(".text-toggle").click(function () {
        $(".card").toggle();
    });

    $(".aparecer").click(function () {
        $(".card").toggle();
    });

})