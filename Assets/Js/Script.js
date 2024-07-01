$(document).ready(function(){
    $(".card-img-top").on('click',function(){
        $(".card-body").toggle({
            "duration": 700
        });
    });

    $(".card-img-top").hover(function(){
        $(this).tooltip();
    });

    $("#enviarcontacto").click(function() {
        alert("El mensaje ya fue enviado correctamente");
    });

});