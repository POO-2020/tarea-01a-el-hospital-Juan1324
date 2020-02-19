class Tiempo{
    constructor(minutos,hora,periodo){
        this.hora=hora;
        this.minutos=minutos;
        this.periodo=periodo;

        getFormato12(){
            return `${this.hora}:${this.minutos} ${this.periodo}`
    
        }
        getFormato1224(){


        }

    }
}