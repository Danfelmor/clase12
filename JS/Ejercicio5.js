function  Num ( numero )  {

    numero  =  documento . getElementById ( 'número' ) . valor ;
    var  div  =  documento . getElementById ( 'B' ) ;
    var  imprimir  =  documento . createElement ( "intervalo" ) ;
    div . appendChild ( imprimir ) ;
    // numero = parseInt (numero);
    if  ( numero  ==  "" )  {
        imprimir . textContent  =  ( "Campo vacío, por favor digite un número" ) ;
    }  else  if  ( numero  %  2  ==  0  &&  numero  >  0 )  {
            imprimir . textContent  =  ( "Par" ) ;
        }  else  if  ( numero  %  2  ==  1  &&  numero  >  0 )  {
            imprimir . textContent  =  ( "Impar" ) ;
        }  else  if  ( numero  %  1  ==  0  &&  numero  <  0 )  {
            imprimir . textContent  =  ( "Debe ingresar números positivos" ) ;
        }  else  if  ( numero  %  1  ! ==  0  &&  numero  >  0 )  {
            imprimir . textContent  =  ( "Debe ingresar números enteros" ) ;
        }  else  if  ( numero  %  1  ! ==  0  &&  numero  <  0 )  {
            imprimir . textContent  =  ( "Debe ingresar números enteros positivos" ) ;
        }
}
función  mostrar ( )  {
    Num ( numero ) ;

}
