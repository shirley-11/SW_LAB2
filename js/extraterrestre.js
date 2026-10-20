import { Jugador } from "./jugador.js";

export class Extraterrestre extends Jugador{

    constructor (nombre){
        super(nombre, (Math.floor(Math.random()*85)+1), 150);
    }

    getNombre(){
        let nuevoNom=super.getNombre().split("").reverse().join("");
        return nuevoNom;
    }

}
