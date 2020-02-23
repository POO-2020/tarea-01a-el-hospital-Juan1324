export default class Fecha {
    constructor(año,mes,dia){
  

        this.fecha=new Date(año,mes -1, dia);

        this.mesAño=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"]

        this.diaSemana=["Domingo","Martes","Miercoles","Jueves","Viernes","Sabado","Lunes"]

        this.difFecha= new Date (Date.now() - this.fecha)
    }
    getAños(){
        let canAños = 1000 * 60 * 60 * 24 * 365;
        let totalAños = Math.trunc(this.difFecha/canAños)
        return (`${totalAños}`);
    }
    getMeses(){
        let canMeses = (1000 * 60 * 60 * 24 * 365)/12;
        let totalMeses = Math.trunc(this.difFecha/canMeses)
        return (`${totalMeses}`);
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
    




