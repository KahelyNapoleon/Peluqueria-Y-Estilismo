

//Funciones Click de Color
$(function(){

   $("#color-titulo").mouseover(function(){
    console.log("click");
   })


    // $("#color-titulo").click(function(){


    //     $(".trabajos1").slideUp();
    //     $(".trabajos1").slideDown();
    // })

    // $("#color-titulo").dblclick(function(){
       
    // })

})

//Funciones Click de Decoloracion
$(function(){

    $("#deco-titulo").click(function(){
        $(".trabajos2").slideUp();
    })

    $("#deco-titulo").dblclick(function(){
        $(".trabajos2").slideDown();
    })

})


