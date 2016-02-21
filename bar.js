function Persona (){
  this.nombre="Diego"
  this.edad=25
  this.acariciar=function(mascota){
    console.log("miaaauu");
    mascota.serAcaricida()
  }

}

function Mascota(){
  this.nombre="tom"
  this.edad=2
  this.acariciada=0
  this.serAcariciada = function(){
    this.acariciada++
  }
}


var juan=new Persona("Juan")
var tom=new Mascota("Wally")

juan.acariciar(tom)

-------------------------------------

function Persona (){
  this.nombre="juan"
  this.edad=22

  this.toma=function(bebida){
    if (this.edad)>18 
      console.log("Bebida fue bebida")
  }
}

function Bebida (){
   this.alcoholica=false
   this.llena=true
}

persona1= new Persona()
bebida1= new Bebida()

persona1.toma(bebida1)


----------------------

/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
}

if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
*/} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare=function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie";
    }
    else if (choice1==="rock"){
        if (choice2==="scissors"){
        return "rock wins";
        } else 
        {return "paper wins"}
        
    }
        
    else if (choice1==="paper"){
        if (choice2==="rock"){
        return "paper wins";
        } else {return "scissors wins"}
    }
    
};
userChoice("rock");
computerChoice("paper");



















