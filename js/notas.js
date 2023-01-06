
function calcularp() {

    let nt1 = document.getElementById("n1").value;
    let nt2 = document.getElementById("n2").value;
    let nt3 = document.getElementById("n3").value;

    let promedio; 

    promedio = (parseFloat(nt1)+parseFloat(nt2)+parseFloat(nt3)) / 3;

    if (promedio >= 7) {
        alert('aprobado');
    } else {
        if (promedio < 7) {
            alert('reprobado');
        }
    }

    document.getElementById("promedio").innerHTML = promedio;

}