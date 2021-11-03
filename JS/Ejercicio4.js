función  NOTAS ( nombre ,  materia ,  nota1 ,  nota2 ,  nota3 )  {

    nombre  =  documento . getElementById ( 'nombre' ) . valor ;
    materia  =  documento . getElementById ( 'materia' ) . valor ;
    nota1  =  documento . getElementById ( 'nota1' ) . valor ;
    nota2  =  documento . getElementById ( 'nota2' ) . valor ;
    nota3  =  documento . getElementById ( 'nota3' ) . valor ;
    nota1  =  parseFloat ( nota1 ) ;
    nota2  =  parseFloat ( nota2 ) ;
    nota3  =  parseFloat ( nota3 ) ;
    var  div  =  documento . getElementById ( 'C' ) ;
    var  imprimir  =  documento . createElement ( "intervalo" ) ;
    div . appendChild ( imprimir ) ;
    if  ( nombre  ===  "" )  {
        imprimir . innerHTML  =  ( "Digite su nombre" ) ;
    }  else  if  ( materia  ===  "" )  {
        imprimir . innerHTML  =  ( "Digite la materia" ) ;
    }
    función  nota ( n1 ,  n2 ,  n3 )  {
        esto . n1  =  n1 ;
        esto . n2  =  n2 ;
        esto . n3  =  n3 ;

    }
    var  notass  =  nueva  nota ( nota1 ,  nota2 ,  nota3 ) ;
    var  PROM  =  ( ( notass . n1  +  notass . n2  +  notass . n3 )  /  3 ) ;
    var  div  =  documento . getElementById ( 'C' ) ;
    var  imprimir  =  documento . createElement ( "intervalo" ) ;
    div . appendChild ( imprimir ) ;
    if  ( PROM  <  0  ||  PROM  >  5  ||  nota1  <  0  ||  nota1  >  5  ||  nota2  <  0  ||  nota2  >  5  ||  nota3  <  0  ||  nota3  >  5 )  { // || PROM <.0 || PROM> .5 |||| nota1> .0 || nota1 <.5 || nota2> .0 || nota2 <.5 || nota3> .0 || nota3 <.5
        imprimir . innerHTML  =  ( "Nota no valida" . fontcolor ( 'rojo' ) ) ;
    }  más  si  ( PROM  > =  0  &&  PROM  <  3 )  {
        imprimir . innerHTML  =  ( "Lo siento"  +  nombre  +  "su nota es" . fontcolor ( 'red' )  +  PROM . toFixed ( 2 ) . fontcolor ( 'red' )  +  "no pasaste la materia"  +  materia  +  "" ) ;
    }  más  si  ( PROM  > =  3  &&  PROM  <=  5 )  {
        imprimir . innerHTML  =  ( "FELICIDADES"  +  nombre  +  "su nota es" . fontcolor ( 'green' )  +  PROM . toFixed ( 2 ) . fontcolor ( 'green' )  +  "pasaste la materia"  +  materia  +  "" ) ;
    }

}
función  mostrar ( )  {
    NOTAS ( nombre ,  materia ,  nota1 ,  nota2 ,  nota3 ) ;

}
