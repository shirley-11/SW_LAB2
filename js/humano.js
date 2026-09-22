import { Jugador } from "./jugador.js";

class Humano extends Jugador{
    constructor(nombre ){
        super(nombre, 70, 150);
    }
}