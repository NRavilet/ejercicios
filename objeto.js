

var auto = {
    ruedas: 4,
    ventanas:6,
    puertas:4,
    motor:1,
    asientos:4,
    manubrio:1,
    maleta,
    frenos:4,
    acelerador:,
    tamaño:"4x4"
}; 

----------------
var persona={
  nombre:"juan",
  apellido:"perez",
  edad:50,
  peso:70,
  genero:"hombre",
  colorPelo:"cafe",
  colorOjos:"verdes",

};

---------------
var computador={
  hardware:"macintosh"
  software:"OS X",
  memoria:"4 GB",
  version:"10.9"
  procesador:"1.3 GHz Intel Core"
  color:"plata",
  pulgadas:"13",
  teclado:"espanol"

};

delete computador.memoria;


-----------------

var motocicleta ={
  marca:"Ducatti",
  motor:"dos tiempos 250",
  kilometraje:0,
  vencina:100,
  dar_una_vuelta: function(duracion){
    if(duracion=="larga"){
      this.kilometraje +=10;
    } else if (duracion =="corta"){
      this.kilometraje +=1;
    }
  this.acelerar();
  },
  acelerar:function(){
    console.log("Acelerar a fondo");
    this.vencina = 100 - (this.kilometraje*0.4)
  }
};


-----

  andar: function(segundos){
    if(segundos==1200){
      this.vencina -=100;
    }
    else if(segundos==100){
      this.vencina -=0;
    }
   }
  };


------

var compañeritos =[
{nombre:"Cristobal", edad:35, genero:"hombre"}
{nombre:"Rodrigo", edad:29, genero:"hombre"}
{nombre:"Manuel", edad:35, genero:"hombre"}
{nombre:"David", edad:35, genero:"hombre"}
{nombre:"Joaquin", edad:35, genero:"hombre"}
{nombre:"Daniela", edad:35, genero:"mujer"}
{nombre:"Gonzalo", edad:35, genero:"hombre"}
{nombre:"Alejandra", edad:28, genero:"mujer"}
{nombre:"Francisca", edad:22, genero:"hombre"}
{nombre:"Sebastian", edad:35, genero:"hombre"}
{nombre:"Nathalie", edad:28, genero:"mujer"}
{nombre:"Carlos", edad:35, genero:"hombre"}
{nombre:"Diego", edad:35, genero:"hombre"}
{nombre:"Belen", edad:21, genero:"mujer"}
{nombre:"JuanCri", edad:35, genero:"hombre"}

];

-----------------


var perro ={
  juegue:function(animal){
    animal.entretenido=true
    animal.felicidad()
  }
}

var gato= {
  felicidad: function(){
    console.log(miauuuu!! :3)
  }, 
  entretenido:false
}

perro.juegue(gato)

console.log(gato)


---------

var pedro ={
  nombre:"pedro",
  edad:28,
  saludar: function(persona) {
    console.log(
      this.nombre +
      "saluda a " + 
      persona.nombre)
    persona.saludado =true
  },
  saludado: false
};

var juan = {
  nombre:"juan",
  edad:24,
  saludar: function(persona) {
    console.log(
      this.nombre +
      "saluda a " +
      persona.nombre)
    persona.saludado=true
  },
  saludado: false
};
pedro.saludar(juan);
console.log(juan);

-----------------------

var persona = {
  nombre:"juan"
}

var registroCivil = {
     cambiarNombre: function(persona, nombre) {
        console.log(
          "registro civil cambio de" + persona.nombre + "a" + nombre)
        persona.nombre =nombre 
     }
}  

registroCivil.cambiarNombre(persona,"Felipe")
console.log(persona)



clase: model para generar objetos. 


--------------------------
//constructor
function Persona (){
  //propiedad
  this.nombre ="Pedro"
  //metodo
  this.saludar= function(persona){
    console.log(this.persona + "a saludado a " + persona.nombre)
    persona.saludado = true
  }
}

var persona1= new Persona()
var persona2= new Persona()
persona.nombre ="Juan"
var persona3= new Persona()
persona3.nombre ="Diego"

console.log(persona1,persona2,persona3)

Cada vez usamos new se crea un elemento nuevo
---------------------
function sumar(a,b){
  console.log(a,b)
}

//constructor
function Persona (nombre){
  //propiedad
  this.nombre = nombre
  this.saludado = false
  //metodo
  this.saludar= function(persona){
    console.log(this.persona + "a saludado a " + persona.nombre)
    persona.saludado = true
  }
}

var persona1 = new Persona("Pedro")
var persona2 = new Persona("Juan")
var persona3 = new Persona("Diego")
console.log(persona1,persona2,persona3)


-----------------------
var = Persona {
nombre:"Diego",
edad:25

}



























