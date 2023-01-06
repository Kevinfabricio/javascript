
/*const auto = {

    marcas: "Nissan",
    modelo: "2020",
    accesorios: ['llantas','volante', 'direecionales']
}

// con el punto solo imprimis las marcas
    console.log(auto).marcas;

for (let i = 0; i <= 9; i++){
    console.log(i);
}
 */

/*let nombre, mensaje;

nombre=window.prompt("¿Cual es su nombre?");
mensaje= `Hola como esta ${nombre}`;
document.write(mensaje);*/

let resultado, num;

num  = window.prompt("Dame un numero");
resultado = parseInt(num);
resultado = resultado * 2;

document.getElementById('salida').innerHTML = (`El doble del numero ingreado es ${resultado}`);


