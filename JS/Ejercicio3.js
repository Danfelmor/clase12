function  Persona ( nombre ,  edad )  {
    nombre  =  documento . getElementById ( 'nombre' ) . valor ;
    edad  =  documento . getElementById ( 'edad' ) . valor ;
    var  div  =  documento . getElementById ( 'A' ) ;
    var  imprimir  =  documento . createElement ( "intervalo" ) ;
    div . appendChild ( imprimir ) ;
    if  ( nombre  ===  "" )  {
        imprimir . innerHTML  =  ( "Campo vacío, digite su nombre" ) ;
    }  más  si  ( edad  ==  "" )  {
        imprimir . innerHTML  =  ( "Campo vacío, digite su edad" ) ;
    }  else  if  ( edad  > =  18  &&  edad  <  120 )  {
        imprimir . textContent  =  ( "| Hola"  +  nombre  +  ","  +  "es mayor de edad" ) ;
    }  else  if  ( edad  >  0  &&  edad  <  18  &&  edad  %  1  ==  0 )  {
        imprimir . textContent  =  ( "| Hola"  +  nombre  +  ","  +  "es menor de edad" ) ;
    }  else  if  ( edad  %  1  ! ==  0 )  {
        imprimir . innerHTML  =  ( "Edad no válida" . fontcolor ( 'rojo' ) ) ;
    }  más  si  ( edad  >  100 )  {
        imprimir . innerHTML  =  ( "Edad no válida" . fontcolor ( 'rojo' ) ) ;
    }  más  {
        imprimir . innerHTML  =  ( "Edad no válida" . fontcolor ( 'rojo' ) ) ;
    }

}
función  mostrar ( )  {
    Persona ( nombre ,  edad ) ;
}
