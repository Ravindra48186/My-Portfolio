$(".berger").click(function(){
    $(".updown").slideToggle();
  });





var b = document.getElementById('btn');
var contra = document.getElementsByClassName('container-hire-me')[0];
var box = document.getElementsByClassName('box')[0];

b.addEventListener('click', function (){
    contra.style.top = '0%';

    box.style.transform = 'scale(1)';

    b.style.zIndex = '-1';
});

var cl = document.getElementsByClassName('close')[0];

cl.addEventListener('click', function (){
    contra.style.top = '-300%';

    box.style.transform = 'scale(0)';
});




var cur = document.querySelector('.cursor');

window.addEventListener('mousemove', function(e) {

    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';

});




var educ = document.getElementsByClassName('education')[0];

var educt = document.getElementsByClassName('education-a')[0];

educ.addEventListener('click', function(){
    educt.style.display = 'block';
    skill.style.display = 'none';
});




var skil = document.getElementsByClassName('skills')[0];

var skill = document.getElementsByClassName('skills-a')[0];

skil.addEventListener('click', function(){
    skill.style.display = 'block';
    educt.style.display = 'none';

});



var head = document.querySelector('header');

window.addEventListener('scroll', function (){

    if(window.pageYOffset > 550){
        head.style.top = '-100px';
    }
    else{
        head.style.top = '0px';
    }

});





new Typed('#typed',{
    strings : ['Ravindra'],
    typeSpeed : 120,
    backSpeed: 100,
    loop : true,
    cursorChar: "_",
  });





  $(document).ready(function(){
    $(".setting").click(function(){
      $(".setting-slider").toggle("900");
    });
  });





  

function changestyle(){

    var first = document.getElementsByClassName("color");

    for(var p=0;p < first.length; p++)
    {
        first[p].style.color="red";
    }

}


function changestyles(){

    var second = document.getElementsByClassName("color");

    for(var q=0;q < second.length; q++)
    {
        second[q].style.color="#03f603";
    }
}




function changestyless(){

    var third = document.getElementsByClassName("color");

    for(var r=0;r < third.length; r++)
    {
        third[r].style.color="rgb(54, 54, 198)";
    }
}





function changestylesss(){

    var four = document.getElementsByClassName("color");

    for(var r=0;r < four.length; r++)
    {
        four[r].style.color=" rgb(235, 36, 96)";
    }
}




function changestylessss(){

    var five = document.getElementsByClassName("color");

    for(var s=0;s < five.length; s++)
    {
        five[s].style.color="#0b7f8b";
    }
}







function brightness(){

    $(".bright").css("display", "none");

    $(".dark").css("display", "block");
    
    $("body").css({
       "background-color": "white", 
       "color": "black"
    });

    $(".updown-anchor").css({"color": "black"});

    $(".color-beige").css({"background-color": "rgb(214 214 214)"});

    $(".change-color-white").css({"color": "white"});

    $(".change-color-black").css({"color": "black"});

    $(".contact-main").css({"background-color": "rgb(214 214 214)"});

    $(".active-click").css({"color": "black",
                             "font-weight": "bolder"});

    $(".second-span").css({"background-color": "gray"});

    $("#text").css({"background-color": "gray"});
}




function darkness(){

    $(".bright").css("display", "block");

    $(".dark").css("display", "none");
    
    $("body").css({
       "background-color": "black", 
       "color": "white"
    });


    $(".updown-anchor").css({"color": "white"});
    
    $(".color-beige").css({"background-color": "black"});

    $(".contact-main").css({"background-color": "black"});

    $(".change-color-white").css({"color": "white"});

    $(".change-color-black").css({"color": "white"});

    $(".active-click").css({"color": "white",
                             "font-weight": "bolder"});

     $(".second-span").css({"background-color": "rgba(255,255,255,0.13)"});

     $("#text").css({"background-color": "rgba(255,255,255,0.13)"});
}



var arrow = document.querySelector('.arrow');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 200) {
        arrow.style.display = 'block';
    }
    else{
        arrow.style.display = 'none'
    }
})







$(".card").mouseover(function(){
    $(".card6, .card5, .card4, .card3, .card2").css("opacity", "0.3");
  });

  

$(".card").mouseout(function(){
    $(".card6, .card5, .card4, .card3, .card2").css("opacity", "1");
  });


  


$(".card2").mouseover(function(){
    $(".card6, .card5, .card4, .card3, .card").css("opacity", "0.3");
  });
$(".card2").mouseout(function(){
    $(".card6, .card5, .card4, .card3, .card").css("opacity", "1");
  });



$(".card3").mouseover(function(){
    $(".card6, .card5, .card4, .card, .card2").css("opacity", "0.3");
  });
$(".card3").mouseout(function(){
    $(".card6, .card5, .card4, .card, .card2").css("opacity", "1");
  });

  
$(".card4").mouseover(function(){
    $(".card6, .card5, .card3, .card2, .card").css("opacity", "0.3");
  });
$(".card4").mouseout(function(){
    $(".card6, .card5, .card3, .card2, .card").css("opacity", "1");
  });

  
$(".card5").mouseover(function(){
    $(".card6, .card4, .card3, .card2, .card").css("opacity", "0.3");
  });
$(".card5").mouseout(function(){
    $(".card6, .card4, .card3, .card2, .card").css("opacity", "1");
  });

  
$(".card6").mouseover(function(){
    $(".card5, .card4, .card3, .card2, .card").css("opacity", "0.3");
  });
$(".card6").mouseout(function(){
    $(".card5, .card4, .card3, .card2, .card").css("opacity", "1");
  });



  
  
$(".card6").mouseover(function(){
  $(".card6 > .icon > img").css("transform", "scale(1)");
});
$(".card6").mouseout(function(){
  $(".card6 > .icon > img").css("transform", "scale(0.7)");
});


$(".card5").mouseover(function(){
  $(".card5 > .icon > img").css("transform", "scale(1)");
});
$(".card5").mouseout(function(){
  $(".card5 > .icon > img").css("transform", "scale(0.7)");
});


$(".card4").mouseover(function(){
  $(".card4 > .icon > img").css("transform", "scale(1)");
});
$(".card4").mouseout(function(){
  $(".card4 > .icon > img").css("transform", "scale(0.7)");
});


$(".card3").mouseover(function(){
  $(".card3 > .icon > img").css("transform", "scale(1)");
});
$(".card3").mouseout(function(){
  $(".card3 > .icon > img").css("transform", "scale(0.7)");
});


$(".card2").mouseover(function(){
  $(".card2 > .icon > img").css("transform", "scale(1)");
});
$(".card2").mouseout(function(){
  $(".card2 > .icon > img").css("transform", "scale(0.7)");
});



$(".card").mouseover(function(){
  $(".card > .icon > img").css("transform", "scale(1)");
});
$(".card").mouseout(function(){
  $(".card > .icon > img").css("transform", "scale(0.7)");
});