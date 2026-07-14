let numEada =[];

function agregarEdad(){
    let numeroCaja
    numeroCaja = recuperarInt("edad");
    numEada.push(numeroCaja);
    pintarArregloIzquierda(numeroCaja);
   
  }


function pintarArregloIzquierda(numeroCaja){
    let cmpTabla;
    let agregarNumero ="";
    cmpTabla = document.getElementById("tablaIzquierda");
    for(let i = 0; i < numEada.length; i ++){
     let addEdad = numEada[i];
       agregarNumero += "<tr><td>"+(addEdad)+"</td>";
       agregarNumero += "<td><button class='btn-eliminar'>Eliminar</button></td>";
       agregarNumero += "<td><button class='btn-mover'>➜</button></tr></tr>"    
   } 
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

