// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture the img element by its id into a variable
    var heart = document.getElementById('heart');

    // add an eventListener for mouseover that changes the src of the
    // heart image to the image titled "love.png"

    // heart.addEventListener('mouseover', function() {
    //     heart.src = "images/love.png";
    // })

    heart.addEventListener('mouseover', getNewImage);

    // add an eventListener for mouseout that changes the src of the
    // heart image back to "question.png"

    heart.addEventListener('mouseout', function() {
        heart.src = "images/question.png";
    })

    // eventually add a preload array (wait for details in class)
    // then display random candy hearts on mouseover

    var imgs = ['images/puke.png', 'images/bemine.png'];
    var prelaod = [];

    for (var i = 0; i < imgs; i++) {

        //create a new image at position of i in the array
        preload[i] = new Image();

        //assign the src for each new image
        preload[i].src = imgs[i];
    }

     function getNewImage(){

       console.log('newimage');
       var myRandom = Math.floor(Math.random() * imgs.length);

      console.log(imgs[myRandom]);

      //change the image source
      heart.src = imgs[myRandom];
      //document.body.style.backgroundImage = 'url(' + imgs[myRandom] + ')';
    }
});
