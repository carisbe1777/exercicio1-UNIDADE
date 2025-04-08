function identificador(n1){
   if(n1 == 0){
    console.log("neutro")
   }else if(n1%2!=0){
    console.log("negativo")
   }else if(n1%2==0){
    console.log("positivo")
   }
}
identificador(5)
identificador(10)
identificador(-9)