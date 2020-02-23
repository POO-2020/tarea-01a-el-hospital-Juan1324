import Nombre from "./nombre.js"
export default class Doctor{
    constructor(nombre,especialida,numerotel,cedula){
        this.nombre=nombre;
        this.especialida=especialida;
        this.numerotel=numerotel;
        this.cedula=cedula;

    }
    getPerfil(){
        return(`${this.cedula},${this.especialida},${this.nombre.getNombreCompleto()},${this.numerotel}`)
    }
}