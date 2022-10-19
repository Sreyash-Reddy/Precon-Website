var scrollPosition = 0;
var prog1 = document.getElementById("prog1");
var prog2 = document.getElementById("prog2");
var prog3 = document.getElementById("prog3");
var prog4 = document.getElementById("prog4");
let t = 0;


function animate1(){
    if(t == 0){
    prog1.classList.remove("prog");
    prog1.classList.add("bar");
    prog2.classList.remove("prog");
    prog2.classList.add("bar");
    prog3.classList.remove("prog");
    prog3.classList.add("bar");
    prog4.classList.remove("prog");
    prog4.classList.add("bar");
    let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.98,
        fill: {gradient:["#FF7C3F" , "#f7c230"]}
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',function(event,progress,stepValue){
        $(this).parent().find("span").text(String((stepValue).toFixed(2).substr(2)) + "%");
    });
    $(".steel .bar").circleProgress({
        value:0.95,
    });
    $(".tiles .bar").circleProgress({
        value:0.99,
    });
    $(".paint .bar").circleProgress({
        value:0.97,
    });
    t = 1;
}
}

window.addEventListener('scroll',function(e){
    scrollPosition = window.scrollY;
    console.log(window.scrollY);
    if(window.scrollY > 400 && window.scrollY < 1230){
        animate1();
    }
    else{
        t = 0;
        prog1.classList.remove("bar");
        prog1.classList.add("prog");
        prog2.classList.remove("bar");
        prog2.classList.add("prog");
        prog3.classList.remove("bar");
        prog3.classList.add("prog");
        prog4.classList.remove("bar");
        prog4.classList.add("prog");
    }
});


window.onload = function () {
     var backgroundImg=["resources/bg1.jpg",
                       "resources/bg2.jpg",
                       "resources/bg3.jpg"]

       setInterval(changeImage, 2000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 3));

       document.querySelector('.body1').style.backgroundImage = "url('"+backgroundImg[i]+"')";

     }
    }     

function updateCounter(){
    fetch("https://api.countapi.xyz/update/precon/precon/?amount=1")
    .then(res => res.json())
    .then(data => counter.innerHTML = "Total Number Of Visiters: "+data.value+ " And Still Growing...");
}

updateCounter();
counter = document.getElementById('count');