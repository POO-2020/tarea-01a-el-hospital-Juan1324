import Fecha from "./fecha.js";
export default class Paciente {

    constructur(nombre,numerotel){
        this.nombre=nombre;
        this.numerotel=numerotel;
        this.Fecha=Fecha;

    }

    getPerfil(){
        return(`${this.nombre},${this.Fecha},${this.numerotel}`);

    }
} 