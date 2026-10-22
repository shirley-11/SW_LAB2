export class Jugador {
    nombre;

    constructor(miNombre, fuerza, salud) {
        this.nombre = miNombre;
        this.fuerza = fuerza;
        this.salud = salud;
    }

    luchar(jugador) {
        if (Math.random() * this.fuerza > jugador.fuerza) {
            jugador.salud -= this.fuerza;
        } else {
            this.salud -= jugador.fuerza;
        }
    }



}