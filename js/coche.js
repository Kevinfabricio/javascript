
function calculard()
{

let m = document.getElementById("marca").value;
let mo = document.getElementById("modelo").value;



let descuento;

 
 if ((m=="ford") && (mo =="fiesta"))
 {
    descuento = 5;
 }

 if ((m=="ford") && (mo =="focus"))
 {
    descuento = 10;
 }
 
 
 document.getElementById("descuento").innerHTML = "su descuento es: " + descuento;


}

