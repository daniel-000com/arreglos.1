function agregarEdad(){
    let numeroCaja = recuperarInt("edad");
    mostrarResultados(numeroCaja);

}

function mostrarResultados(numeroCaja){
    let cmpTabla = document.getElementById("tablaIzquierda");
    let agregarNumero = "<tr><td>"+numeroCaja+"</td>";
       agregarNumero += "<td><button class='btn-eliminar'>Eliminar</button></td>";
       agregarNumero += "<td><button class='btn-mover'>➜</button></tr>"
       cmpTabla.innerHTML= agregarNumero;

    
}
function recuperaraTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    }

function recuperarInt(idComponente){
        let valorCaja=recuperaraTexto(idComponente);
        let valorEntero=parseInt(valorCaja);
        return valorEntero;
}

function agregarNumero(nota,lista) {
    lista.push(nota);
    
}
