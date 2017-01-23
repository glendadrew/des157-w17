// JavaScript Document
$(function(){
    console.log('js ready');

    var myVal = $('#current').offset().top - 100;
    $('html, body').animate({
        scrollTop: myVal
    }, 500, slideNav);

    function slideNav() {
        //console.log("sliding nav");
        $('nav').animate({
            top: myVal + 100
        }, 500);
    }

     $("a").each(function(){
         $(this).attr({
               target: "_blank",
           });
     });

    $('#closeDue').click(function() {
      console.log('close due');
        $('#dueSection').hide();
    });
});
