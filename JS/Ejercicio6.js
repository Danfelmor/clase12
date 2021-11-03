documento . getElementById ( 'botón' ) . onclick = function ( ) {
    let  palabra = documento . getElementById ( 'palabra' ) . valor ;
    let  re = new  RegExp ( palabra , 'g' ) ; // RegExp se utiliza para hacer coincidir texto con un patrón.
    deje  texto = documento . getElementById ( 'texto' ) . valor ;
    deja  resultado = texto . reemplazar ( re , '<span class = "encontrado"> $ & </span>' )
    documento . getElementById ( 'resultado' ) . innerHTML = resultado ;
}
