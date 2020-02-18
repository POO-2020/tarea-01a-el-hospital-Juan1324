class Nombre {
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;

    }
    getNombreCompleto(){
        return(`${this.nombre}${this.apellidoPaterno}${this.apellidoMaterno}`)

    }
    getApellidoNombre(){

    }
    getIniciales(){

    }
}
let nombre1= new Nombre("Juan ","Ramos"," Campos");
console.log(nombre1.getNombreCompleto())