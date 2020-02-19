class Tiempo{
    constructor(hora,minutos,periodo){
        this.hora=hora;
        this.minutos=minutos;
        this.periodo=periodo;
    }
        

        getFormato12(){
            return `${this.hora}:${this.minutos} ${this.periodo}`
        }
        getFormato24(){
            if (this.hora !=12 && this.periodo=="pm"){
                this.hora=this.hora+12;
            }
            return(`${this.hora}:${this.minutos}`)

        }
}
let hora= new Tiempo(1,55,"pm")
console.log(hora.getFormato12())
console.log(hora.getFormato24())