// JavaScript Document
$(function() {
    console.log('reading');

    var myVal = $('#current').offset().top - 100;

    moveSchedule();

    /*
    $(window).scroll(function () {
         clearTimeout($.data(this, 'scrollTimer'));
         $.data(this, 'scrollTimer', setTimeout(function () {
             // do something
             console.log('myVal before adjustment: ' + myVal);
             myVal = $('html, body').offset().top - 100;
             console.log('myVal after adjustment: ' + myVal);
             slideNav();
         }, 250));
     });
     */


    function moveSchedule() {

        console.log("moving schedule up");

        $('html, body').animate({
            scrollTop: myVal
        }, 500, moveNav);
    }

    function moveNav() {

        console.log("moving nav down");
        $('nav').css('position', 'absolute').animate({
            top: myVal + 100
        }, 500);
        console.log('nav is : ' + $('nav').top);


    }

    $('a').each(function() {
        $(this).attr({
            target: "_blank",
        });
    });

    $('#closeDue').click(function() {
        $('#dueSection').hide();
    });
});
