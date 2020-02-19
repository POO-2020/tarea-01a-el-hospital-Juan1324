class Fecha {
    constructor(fecha){
        this.fecha= fecha;
        this.fechaHoy= new Date();
        this.años = Math.floor(((this.fechaHoy - this.fecha) / (1000 * 60 * 60 * 24) / 365));
 


    }
    getAños(){
    }
    
}
