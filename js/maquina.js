import { Jugador } from "./jugador.js";

class Maquina extends Jugador{

    
    constructor (nombre){
        super(nombre, (Math.floor(Math.random()*100)+1), 130);
    }

    
}