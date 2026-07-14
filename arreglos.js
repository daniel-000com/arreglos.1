let numEdad =[];
let numEdadDR =[];

function agregarEdad(){
    let numeroCaja;
    numeroCaja = recuperarInt("edad");
    numEdad.push(numeroCaja);
    pintarArregloIzquierda(numEdad);
    document.getElementById("edad").value = "";
    document.getElementById("edad").focus();
   
  }


function pintarArregloIzquierda(numeroCaja){ 
    let agregarNumero ="<tbody>";
    let cmpTabla = document.getElementById("tablaIzquierda");
    for(let i = 0; i < numEdad.length; i ++){
     let addEdad = numEdad[i];
       agregarNumero += "<tr><td>"+(addEdad)+"</td>";
       agregarNumero += "<td><button onclick='eliminarIzquierda("+i+")' class='btn-eliminar'>Eliminar</button></td>";
       agregarNumero += "<td><button onclick='moverDerechaindice("+i+")' class='btn-mover'>➜</button></tr></tr>"  
       agregarNumero +="</tbody>";  
   } 
   cmpTabla.innerHTML= agregarNumero;
}

function eliminarIzquierda(indice){
     numEdad.splice(indice, 1)
     pintarArregloIzquierda(numEdad)
     
}
function pintarArregloDerecha(numeroCaja){
    let cmpTabla;
    let agregarNumero ="";
    cmpTabla = document.getElementById("tablaDerecha");
    for(let i = 0; i < numEdadDR.length; i ++){
     let addEdad = numEdadDR[i];
       agregarNumero += "<tr><td><button onclick='moverIzquierda("+i+")' class='btn-mover'>⬅</button></td>"
       agregarNumero += "<td>"+(addEdad)+"</td>";
       agregarNumero += "<td><button onclick='eliminarDerecha("+i+")' class='btn-eliminar'>Eliminar</button></td></tr>";    
   } 
   cmpTabla.innerHTML= agregarNumero;
}

function eliminarDerecha(indice){
     numEdadDR.splice(indice, 1)
     pintarArregloDerecha(numEdadDR)
}
function moverDerechaindice(indice){
    let valores = numEdad[indice]
    numEdadDR.push(valores);
    numEdad.splice(indice, 1)
    pintarArregloDerecha(numEdadDR)
    pintarArregloIzquierda(numEdad)

}

function moverIzquierda(indice){
    let valores = numEdadDR[indice]
    numEdad.push(valores);
    numEdadDR.splice(indice, 1)
    pintarArregloDerecha(numEdadDR)
    pintarArregloIzquierda(numEdad)

}
