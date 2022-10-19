function fn(){
    var body0 = document.getElementById("body0");
    body0.style.visibility = "visible" ;   
    body0.style.marginTop = "50px" ;
    var op3 = document.getElementById("op1");
    var op4 = document.getElementById("op2");
    op3.innerHTML = "<p>Enter the amount of one tile (in ₹)</p><input type=\"number\" placeholder=\"Cost\" id=\"cot\">";
    op4.innerHTML = "<button onclick=\"fn1()\" id=\"Button\">Submit</button>";
}

function fn1(){
    var lr = document.getElementById("lengthRoom").value;
    var br = document.getElementById("breadthRoom").value;
    var lt = document.getElementById("lengthTile").value;
    var bt = document.getElementById("breadthTile").value;
    var cot = document.getElementById("cot").value;
    var tcot = 0;
    var body2 = document.getElementById("body2");
    body2.style.visibility = "visible" ;   
    body2.style.marginTop = "50px" ;   

    ar = lr * br;
    at = lt * bt;
    tilesRequired = (ar/at);
    tcot = Math.round(tilesRequired) * cot ;
    document.getElementById("output1").innerHTML = "Number of Tiles required are: " +Math.round(tilesRequired) ;
    document.getElementById("output2").innerHTML = "Total cost for Tiles: ₹" +tcot ;
}

const navigation = document.querySelector('.navigation');
let converter = document.getElementById("converter");
document.querySelector('.toggle').ondblclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
    // converter.style.transform = "translateY(-25px)"
}

function calculator(){
    var inc = document.getElementById("data").value;
    ft = 0.833 * inc;
    document.getElementById("op").innerHTML= "The value is "+ ft +" feets";
}