
var pass;
// > undefined

var pass2="hola"
// > undefined

do {
  pass= prompt("ingrese contraseña");
  {while(pass !==pass2);
  } 

-------------------------------------

var pass;
var pass2="hola"

while (pass !==pass2) {
   pass= promt("ingrese su clave") 
 }
 alert("contraseña es correcta");


------------------------------------

var n=  parseInt(promt("ingrese un número"));
var suma=0;
var i=1:

while n>=i{
  suma+=i;
  i+=1;
}
console.log(suma);

--------------------------------------

var n= 0;
var suma=0;
var i=1:

n=  parseInt(promt("ingrese un número"));

while(i<=n) {
   if(i%2==0) suma+=i{
    console.log(i);
    suma+=1;
   }
   i+=1;
   }
   console.log(suma);

--------------------------------------

for (var i=0; i<=100; i++){
  console.log(i);
}

--------------------------------------
var suma=0;

var n=  parseInt(promt("ingrese un número"));

for (var i=0; i<=n; i++){
  if(suma=0){
    suma=1;}

    else if(i===n){
      suma+="2";
    }
    else if(suma=0){
      suma=0;  
    } console.log(suma);

  }

---------------------------------------

var size=5

for(var i=0; i<size; i++){
  str=""; 
  for(var j=0; j<=i; j++){
  str="*"; 
} console.log(str);


----------------------------------------

var azar= Math.ceil(Math.random()*10)
var user=0;
var count=0;
var oportunities = parseInt(prompt("ingresa el número de oportunidades"));

while(azar!=user) {
user= prompt("Adivina un numero del 1 al 10");

  if (azar==user){
    console.log("has ganado");
  break;
}
  else if (count==oportunities){
    console.log("has perdido el número era" + azar);
    break;
  }
  else if (user>azar){
    console.log("estas muy arriba");
  }
  else if (user<azar){
    console.log("estas muy abajo")
  }
count *=1;
}

----------------------------------------

function calculaPrecioTotal(precio,impuesto) {
  var impuesto= impuesto;
  var precio = precio;
  var gastoEnvio= 5000;


  var total= (precio * (impuesto/100)) + gastoEnvio;
  return Math.ceil(total);
}

var precioTotal = calculaPrecioTotal(20000,19);
console.log(precioTotal);

------------------------------------------

function Par_Impar(numero) {
  if (numero %2==0) return "es par";
  else return "es impar";
}

------------------------------------------

function fibonacci (i){
  var i=0;

  if (i==0|| i==1) return "es fibonacci";
  else (i= (i(n-1) + i(n-2))) return "no es un numero fibonacci";
}






