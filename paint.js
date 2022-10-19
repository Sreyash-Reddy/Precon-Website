let paintAreaOut = 0;
let in_area_per_room = 0;
let tot_painting_area = 0;
let area_deduction = 0
let i = 1;
let tot_area_room = 0;

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


function interior(){
    var body2 = document.getElementById("body2");
    var rno = document.getElementById("rno");
    body2.style.visibility = "visible" ;   
    body2.style.marginTop = "50px" ; 
    var out_perimeter = document.getElementById("extPer").value;//20
    var out_height = document.getElementById("out_height").value;//5
    var tot_door = document.getElementById("tot_door").value;//2
    var door_len = document.getElementById("ltd").value;//2
    var door_br = document.getElementById("btd").value;//1
    var tot_win = document.getElementById("tot_win").value;//1
    var win_len = document.getElementById("ltw").value;//1
    var win_br = document.getElementById("btw").value;//0.5
    area_deduction = tot_door*(door_len*door_br) + tot_win*(win_len*win_br);//4.5 
    paintAreaOut += (out_perimeter * out_height) - area_deduction ;//95.5
    var intPaint2 = document.getElementById("intPaint2");
    var intPaint3 = document.getElementById("intPaint3");
    var intPaint4 = document.getElementById("intPaint4");
    var intPaint5 = document.getElementById("intPaint5");
    var intPaint6 = document.getElementById("intPaint6");
    var intPaint7 = document.getElementById("intPaint7");
    var intPaint8 = document.getElementById("intPaint8");
    var rno = document.getElementById("rno");
        intPaint2.innerHTML = "<p>Enter the dimensions of room #" + i +" </p><input type=\"number\" placeholder=\"Length\" id=\"ltr\" class=\"flex\"><input type=\"number\" placeholder=\"Breadth\" id=\"btr\" class=\"flex\"><input type=\"number\" placeholder=\"Height\" id=\"htr\" class=\"flex\">";
        intPaint3.innerHTML = "<p>Enter the number of Doors in this room</p><input type=\"number\" placeholder=\"Number\" id=\"tot_door\">";
        intPaint4.innerHTML = "<p>Enter the dimensions of each Door</p><input type=\"number\" placeholder=\"Length\" id=\"ltd\"><input type=\"number\" placeholder=\"Breadth\" id=\"btd\">";
        intPaint5.innerHTML = "<p>Enter the number of Windows in this room</p><input type=\"number\" placeholder=\"Number\" id=\"tot_win\">";
        intPaint6.innerHTML = "<p>Enter the dimensions of each Window</p><input type=\"number\" placeholder=\"Length\" id=\"ltw\" class=\"flex\"><input type=\"number\" placeholder=\"Breadth\" id=\"btw\" class=\"flex\">";
        intPaint7.innerHTML = "<p>Are There Any Rooms To Add?</p>";
        intPaint8.innerHTML = "<div class = \"yes\"><input type=\"checkbox\" name=\"roomsY\" class=\"rooms\" id=\"roomsY\"><label for=\"roomsY\" id=\"rmY\">Yes</label></div><div class=\"no\"><input type=\"checkbox\"class=\"rooms\" name=\"roomsN\" id=\"roomsN\"><label for=\"roomsN\" class=\"rooms\">No</label></div><button id=\"rooms\" onclick=\"fn3()\">Submit</button>";
        rno.innerHTML = "<h2>#" +i+"</h2>"
}

function fn3(){  
    roomsY = document.getElementById("roomsY");
    roomsN = document.getElementById("roomsN");
    var rno = document.getElementById("rno");
    var room_len = document.getElementById("ltr").value;//5
    var room_br = document.getElementById("btr").value;//4
    var room_ht = document.getElementById("htr").value;//5
    var tot_door = document.getElementById("tot_door").value;//2
    var door_len = document.getElementById("ltd").value;//2
    var door_br = document.getElementById("btd").value;//1
    var tot_win = document.getElementById("tot_win").value;//1
    var win_len = document.getElementById("ltw").value;//1
    var win_br = document.getElementById("btw").value;//.5

    tot_area_room = (room_len*room_br) + 2*(parseInt(room_len) + parseInt(room_br))*room_ht;//110
    area_deduction = tot_door*(door_len*door_br) + tot_win*(win_len*win_br);//4.5
    painting_area = tot_area_room - area_deduction;//105.5
    in_area_per_room += painting_area;//105.5+105.5=211

    if(roomsY.checked == true && roomsN.checked == false){

        i += 1;
        interior();
    }
    else if(roomsN.checked == true && roomsY.checked == false){
        var body3 = document.getElementById("body3");
        body3.style.visibility = "visible" ;   
        body3.style.marginTop = "50px" ; 
        console.log(in_area_per_room);
        tot_painting_area = paintAreaOut + in_area_per_room ;//201
        var intPaint9 = document.getElementById("intPaint9");
        var intPaint10 = document.getElementById("intPaint10");
        intPaint9.innerHTML = "Is It A Newly Painting or Repaint";
        intPaint10.innerHTML = "<input type=\"checkbox\" name=\"newY\" id=\"newY\"><label for=\"newY\">Newly Painting</label><input type=\"checkbox\" name=\"newN\" id=\"newN\"><label for=\"newN\">Repaint</label><button id=\"new\" onclick=\"fn5()\">Submit</button>";
    }


}

function fn5(){
    var body0 = document.getElementById("body0");
    body0.style.visibility = "visible" ;   
    body0.style.marginTop = "50px" ;
    var op3 = document.getElementById("op1");
    var op4 = document.getElementById("op2");
    op3.innerHTML = "<p>Enter the amount of paint per Litre (in ₹)</p><input type=\"number\" placeholder=\"Cost\" id=\"cop\">";
    op4.innerHTML = "<button onclick=\"fn4()\" id=\"Button\">Submit</button>";
}

function fn4(){
    var body4 = document.getElementById("body4");
    body4.style.visibility = "visible" ;   
    body4.style.marginTop = "50px" ; 
    var cop = document.getElementById("cop").value;  
    newY = document.getElementById("newY");
    newN = document.getElementById("newN");
    var intPaint11 = document.getElementById("intPaint11");
    var intPaint12 = document.getElementById("intPaint12");
    if(newY.checked == true && newN.checked == false){
        paint_per_sq_ft = 0.0189;
        total_amount_paint = paint_per_sq_ft*tot_painting_area;//3.7989
        tcop = total_amount_paint * cop;
        intPaint11.innerHTML = "The required paint is: " +total_amount_paint+" liters";
        intPaint12.innerHTML = "Cost for Paint: ₹" +tcop;
        
    }else if(newN.checked == true && newY.checked == false){
        paint_per_sq_ft = 0.0108;
        total_amount_paint = paint_per_sq_ft*tot_painting_area;
        tcop = total_amount_paint * cop;
        intPaint11.innerHTML = "The required paint is: " +total_amount_paint+" liters";
        intPaint12.innerHTML = "Cost for Paint: ₹" +tcop;
    }
}


