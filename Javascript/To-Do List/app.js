console.log("Funciona")

let lista = [];



let desicion= prompt("¿Que te gustaria hacer?")


while (desicion!=="quit" && desicion!=="q") {

    desicion= prompt("¿Que te gustaria hacer?")

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
    
    if (eliminado<=lista.length) {
        console.log( lista[eliminado]+" ha sido eliminado de la lista.")
        lista.splice(eliminado,1);
    } else {
        console.log("index invalido")
    }
    

}



}

console.log("Has Salido de la app")





// comandos
// new - añade a la lista
// list - muestra la lista
// delete - remueve
// quit - salir