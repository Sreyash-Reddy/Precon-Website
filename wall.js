// var scrollPosition = 0;
// var sectionPosition = 150;


// window.addEventListener('scroll',function(e){
//     scrollPosition = window.scrollY;
//     console.log(scrollPosition);
// });


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

function fn(){
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var op3 = document.getElementById("op3");
    var op4 = document.getElementById("op4");
    var body0 = document.getElementById("body0");
    var rno = document.getElementById("rno");
    body0.style.visibility = "visible" ;   
    body0.style.marginTop = "50px" ; 
    op1.innerHTML = "<p>Enter the amount of one brick (in ₹)</p><input type=\"number\" placeholder=\"Cost\" id=\"cob\">";
    op2.innerHTML = "<p>Enter the amount of one bag cement (in ₹)</p><input type=\"number\" placeholder=\"Cost\" id=\"coc\">";
    op3.innerHTML = "<p>Enter the amount of one cft sand (in ₹)</p><input type=\"number\" placeholder=\"Cost\" id=\"cos\">";
    op4.innerHTML = "<button onclick=\"fn1()\" id=\"Button\">Submit</button>";
}
function fn1(){
    let wl = document.getElementById("ltw").value;
    let wh = document.getElementById("htw").value;
    let wt = document.getElementById("tkw").value;
    let bl = document.getElementById("ltb").value;
    let bh = document.getElementById("htb").value;
    let bt = document.getElementById("tkb").value;
    let mp = document.getElementById("ptm").value;
    let cr = document.getElementById("rtc").value;
    let sr = document.getElementById("rts").value;
    let cob = document.getElementById("cob").value;
    let coc = document.getElementById("coc").value;
    let cos = document.getElementById("cos").value;
    let output1 = document.getElementById("output1");
    let output2 = document.getElementById("output2");
    let output3 = document.getElementById("output3");
    let output4 = document.getElementById("output4");
    let output5 = document.getElementById("output5");
    let output6 = document.getElementById("output6");
    let output7 = document.getElementById("output7");
    var body2 = document.getElementById("body2");
    // var rno = document.getElementById("rno");
    body2.style.visibility = "visible" ;   
    body2.style.marginTop = "50px" ; 

    bw = wl * wh * wt ;
    vb = bl * bh * bt ;

    vm = (mp/100) * bw ;
    nbw = bw - vm ;
    nb = nbw / vb ;

    output1.innerHTML = "No of bricks required: " +nb ;

    w = (10/100) * nb ;
    nbww = nb + w ;

    output2.innerHTML = "No of bricks required with wastage: " +nbww ;

    srr = parseInt(sr) + parseInt(cr);
    cem = (cr * vm * 1.27)/srr ;
    tcem = cem / 1.25 ;

    output3.innerHTML = "No of cement bags required: " +Math.round(tcem)  +" bags" ;

    san = cem * sr ;

    output4.innerHTML = "Weight of sand required: " +san.toFixed(4) + " cft" ;

    tcob = nbww * cob ;
    tcoc = Math.round(tcem) * coc;
    tcos = san.toFixed(4) * cos ;

    output5.innerHTML = "Price for Bricks: ₹" +tcob;
    output6.innerHTML = "Price for Cement: ₹" +tcoc;
    output7.innerHTML = "Price for Sand: ₹" +tcos;
}