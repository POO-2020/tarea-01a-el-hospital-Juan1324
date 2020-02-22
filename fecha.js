export default class Fecha {
    constructor(año,mes,dia){
  

        this.fecha=new Date(año,mes -1, dia);

        this.mesAño=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"]

        this.diaSemana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

        this.fechaHoy= new Date(Date.now());
        this.años = this.fechaHoy.getFullYear()-this.fecha.getFullYear()
 


    }
    getAños(){
        return(this.años);
    }
    getMeses(){
        return(this.años*12)
    }
    getSemanas(){
        return(this.años*52)
    }
    getDias(){
        return(this.años*365)
    }
    getFecha(){
        let mes=this.mesAño[this.fecha.getMonth()];
        return(`${this.fecha.getDate()}/${mes}/${this.fecha.getFullYear()}`);
    }
    getDia(){
        let dia=this.diaSemana[this.fecha.getDay()];
        return(dia);

    }
    
}
    




