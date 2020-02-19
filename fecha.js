class Fecha {
    constructor(fecha){
        this.fecha= fecha;
        this.fechaHoy= new Date();
        this.años = Math.floor(((this.fechaHoy - this.fecha) / (1000 * 60 * 60 * 24) / 365));
 


    }
    getAños(){
        return(this.años);
    }
    getMeses(){
        return(this.años*12)
    }
    
    
}
let años= new Fecha(new Date(2000,1,10))
console.log(años.getAños());
console.log(años.getMeses());

