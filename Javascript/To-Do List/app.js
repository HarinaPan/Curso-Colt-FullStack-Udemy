console.log("Funciona")

let lista = [];

console.log("********************")
console.log("Comandos Disponibles")
console.log("Add - añade objeto a la lista")
console.log("List - Muestra la lista de objetos")
console.log("Delete - Introduzca index del objeto a eliminar")
console.log("Quit - Salir")
console.log("********************")

let desicion= prompt("¿Que te gustaria hacer?")


while (desicion!=="quit") {

  

if  (desicion ==="add") {
    let objetoAñadido = prompt("Agregar cosa por hacer (To-Do)")

    lista.push(objetoAñadido);
    console.log( objetoAñadido +" ha sido añadido a la lista.")


} else if (desicion ==="list") {

    
    console.log("**************")
    
    let index = 0;

    for (let itemLista of lista) {
        console.log(index+": "+itemLista);
        index+=1;
    }
    console.log("**************")
    
} else if (desicion ==="delete") {
 
    let eliminado = parseInt(prompt("Indique el index del Objeto a eliminar"))
    console.log( lista[eliminado]+" ha sido eliminado de la lista.")
    lista.splice(eliminado,1);

}

desicion= prompt("¿Que te gustaria hacer?")

}





// comandos
// new - añade a la lista
// list - muestra la lista
// delete - remueve
// quit - salir