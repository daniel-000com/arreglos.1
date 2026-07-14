let numEada =[];
let numeroCaja = []
let edadesDerecha = []

function agregarEdad(){
    numeroCaja = recuperarInt("edad");
    numEada.push(numeroCaja);
    pintarArregloIzquierda(numEada);
   
  }


function pintarArregloIzquierda(numeroCaja){
    let cmpTabla;
    let agregarNumero ="";
    cmpTabla = document.getElementById("tablaIzquierda");
    for(let i = 0; i < numEada.length; i ++){
     let addEdad = numEada[i];
       agregarNumero += "<tr><td>"+(addEdad)+"</td>";
       agregarNumero += "<td><button onclick='eliminarIzquierda("+i+")' class='btn-eliminar'>Eliminar</button></td>";
       agregarNumero += "<td><button class='btn-mover'>➜</button></tr></tr>"    
   } 
   cmpTabla.innerHTML= agregarNumero;
}

function eliminarIzquierda(indice){
     numEada.splice(indice, 1)
     pintarArregloIzquierda(numEada)
     
}
function pintarArregloIzquierda(numeroCaja){
    let cmpTabla;
    let agregarNumero ="";
    cmpTabla = document.getElementById("tablaDerecha");
    for(let i = 0; i < numEada.length; i ++){
     let addEdad = numEada[i];
       agregarNumero += "<td><button class='btn-mover'>⬅</button></tr></tr>"
       agregarNumero += "<tr><td>"+(addEdad)+"</td>";
       agregarNumero += "<td><button onclick='eliminarIzquierda("+i+")' class='btn-eliminar'>Eliminar</button></td>";    
   } 
   cmpTabla.innerHTML= agregarNumero;
}


