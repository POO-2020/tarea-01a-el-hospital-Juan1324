export default class Fecha {
    constructor(fecha,dia,mes,año){
        this.fecha= fecha;
        this.fechaHoy= new Date();
        this.años = Math.floor(((this.fechaHoy - this.fecha) / (1000 * 60 * 60 * 24) / 365));
        this.formatoFecha=new Date(año,mes -1, dia);
        this.mesAño=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"]
 


    }
    getAños(){
        return(this.años);
    }
    getMeses(){
        return(this.años*12)
    }
    getSemanas(){
        return(this.años*12*4)
    }
    getDias(){
        return(this.años*12*4*365)
    }
    getFecha(){
        let mes=this.mesAño[this.fecha.getMonth()];
        return(`${this.fecha.getDate()}/${mes}/${this.fecha.getFullYear()}`);
    }
    
}
    




