var comparar = function(opcion1, opcion2) {
    console.log(opcion1);
    console.log(opcion2);
    if(opcion1 === opcion2) {
        return "Es un empate";
    }

    if(opcion1 === "piedra") {
        if(opcion2 === "tijera") {
            return "piedra gana";
        } else {
            return "papel gana";
        }
    }

    else if(opcion1 === "papel") {
        if(opcion2 === "piedra") {
            return "papel gana";
        } else {
            if(opcion2 === "tijera") {
                return "tijera gana";
            }
        }
    }

    else if(opcion1 === "tijera") {
        if(opcion2 === "piedra") {
            return "piedra gana";
        } else {
            if(opcion2 === "papel") {
                return "tijera gana";
            }
        }
    }
};


var usuario = prompt("Elige piedra, papel, tijera?");
var computador = Math.random();

if (computador <= 0.33) {
    computador = "piedra";
} else if(computador <= 0.66) {
    computador = "papel";
} else {
    computador = "tijera";
}

var resultado = comparar(usuario, computador);
console.log(resultado);
