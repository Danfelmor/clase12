dejar  tipo ;
función  Texto ( tipo ) {
    tipo  =  documento . getElementById ( 'tipo' ) . valor ;
    var  div  =  documento . getElementById ( 'B' ) ;
    var  imprimir  =  documento . createElement ( "intervalo" ) ;
    div . appendChild ( imprimir ) ;
     if ( tipo === "" )  {
        imprimir . innerHTML  =  ( "Campo vacío" . fontcolor ( 'rojo' ) ) ;
     } else  if ( tipo <= 0 || tipo > = 0 ) {
        imprimir . textContent  =  ( "Número" ) ;
    }
    else  { // if (tipo = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t , u, v, w, x, y, z ')
        imprimir . innerHTML  =  ( "Texto" ) ;
    }
}
    
función  mostrar ( )  {
    Texto ( tipo ) ;
}
