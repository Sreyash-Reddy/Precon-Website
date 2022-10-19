
let total_steel = 0;
let i = 1;

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

function fn1(){
    var body2 = document.getElementById("body2");
    body2.style.visibility = "visible" ;   
    body2.style.marginTop = "50px" ;   

    document.getElementById("body2-1").innerHTML = "<h2>Quantity Of Steel For Roof</h2>";
    document.getElementById("body2-2").innerHTML = "<p>Enter the area of roof in square feet</p><input type=\"number\" placeholder=\"Area\" id=\"arr\">";
    document.getElementById("body2-3").innerHTML = "<p>Enter the thickness of roof in square feet</p><input type=\"number\" placeholder=\"Thickness\" id=\"tkr\">";
    document.getElementById("body2-4").innerHTML = "<button id=\"Roof\" onclick=\"fn2()\">Submit</button>";

}

function fn2(){
    var body3 = document.getElementById("body3");
    body3.style.visibility = "visible" ;   
    body3.style.marginTop = "50px" ;   
    document.getElementById("body3-1").innerHTML = "<h2>Calculation for Beam Slab</h2>";
    document.getElementById("body3-2").innerHTML = "<p>Enter the volume of slab in cubic metres</p><input type=\"number\" placeholder=\"Volume\" id=\"vos\">";
    document.getElementById("body3-4").innerHTML = "<button id=\"Beam Slab\" onclick=\"fn5()\">Submit</button>";
}

function fn5(){
    var body311 = document.getElementById("body3-1-1");
    body311.style.visibility = "visible" ;   
    body311.style.marginTop = "50px" ;   
    document.getElementById("body3-9").innerHTML = "<h2>Enter data for Beams </h2>";
    document.getElementById("body3-10").innerHTML = "<p>Enter the total number of Beams</p><input type=\"number\" placeholder=\"Number\" id=\"nob\">";
    document.getElementById("body3-11").innerHTML = "<p>Enter the length of beam in metres</p><input type=\"number\" placeholder=\"length\" id=\"ltb\">";
    document.getElementById("body3-12").innerHTML = "<p>Enter the width of beam in metres</p><input type=\"number\" placeholder=\"width\" id=\"wtb\">";
    document.getElementById("body3-13").innerHTML = "<button id=\"Beam\" onclick=\"fn6()\">Submit</button>";
    
}

function fn6(){
    var body4 = document.getElementById("body4");
    body4.style.visibility = "visible" ;   
    body4.style.marginTop = "50px" ;   
    document.getElementById("body4-1").innerHTML = "<h2>Enter data for Foundation </h2>";
    document.getElementById("body4-2").innerHTML = "<p>Enter the base area of the house in sq. metres</p><input type=\"number\" placeholder=\"Area\" id=\"bah\">";
    document.getElementById("body4-3").innerHTML = "<p>Enter the height of the foundation in metres</p><input type=\"number\" placeholder=\"Height\" id=\"hof\">";
    document.getElementById("body4-4").innerHTML = "<button id=\"Foundation\" onclick=\"fn7()\">Submit</button>";
}

function fn7(){
    var body5 = document.getElementById("body5");
    body5.style.visibility = "visible" ;   
    body5.style.marginTop = "50px" ;   
    document.getElementById("body5-1").innerHTML = "<p>Enter the cost of Steel per kg(in ₹)</p><input type=\"number\" placeholder=\"Amount\" id=\"cst\">";
    document.getElementById("body5-2").innerHTML = "<button id=\"cost\" onclick=\"fn8()\">Submit</button>";
}

function fn8(){  
    var n_p = document.getElementById("pillars").value;
    var p_l = document.getElementById("ltp").value;
    var p_w = document.getElementById("wtp").value;
    var p_h = document.getElementById("htp").value;
    var gap = document.getElementById("gap").value;
    var a = document.getElementById("arr").value;//1
    var t = document.getElementById("tkr").value;//1
    var vol = document.getElementById("vos").value;
    var m = document.getElementById("nob").value;//1
    var l_m = document.getElementById("ltb").value;//1
    var b_m = document.getElementById("wtb").value;//1
    var f_area = document.getElementById("bah").value;//1
    var f_ht = document.getElementById("hof").value;//1
    var body6 = document.getElementById("body6");
    body6.style.visibility = "visible" ;   
    body6.style.marginTop = "50px" ;    
    var cost = document.getElementById("cst").value;
    total_bar_length = p_l*6*n_p;//6
    no_stirrups = Math.round((p_l/gap)+1);//2
    length_1stirrup = 2*((p_w-0.12)+(p_h-0.12))+2;//-
    total_stirrup_length = length_1stirrup*no_stirrups*n_p;//-4
    weight_of_steel_p = (8*8*total_stirrup_length*0.3048)/162 + (12*12*total_bar_length*0.3048)/162;//1.14354
    weight_of_steel_r = ((a*t)/35.3147)*80;//2.265345592
    weight_of_steel_s = 80*vol;
    weight_of_steel_b = 130*m*l_m*b_m;
    weight_of_steel_f = 50*f_area*f_ht;
    total = weight_of_steel_p + weight_of_steel_r + weight_of_steel_s + weight_of_steel_f+weight_of_steel_b;
    total_cost = total * cost ;
    document.getElementById("body6-1").innerHTML = "Quantity of steel required for pillars is " +weight_of_steel_p.toFixed(4) +"kgs" ;
    document.getElementById("body6-2").innerHTML = "Quantity of steel required for roof is " +weight_of_steel_r.toFixed(4) +"kgs" ;
    document.getElementById("body6-3").innerHTML = "Quantity of steel required for slabs is " +weight_of_steel_s +"kgs" ;
    document.getElementById("body6-4").innerHTML = "Quantity of steel required for beams is " +weight_of_steel_b +"kgs";
    document.getElementById("body6-5").innerHTML = "Quantity of steel required for foundation is " +weight_of_steel_f +"kgs" ;
    document.getElementById("body6-6").innerHTML = "Total Steel required is " +total +"kgs" ;
    document.getElementById("body6-7").innerHTML = "Cost of steel to be used is: ₹" + Math.round(total_cost) ;


}