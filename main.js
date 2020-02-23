import Fecha from "./fecha.js";
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js";

class Main{

    constructor(){

    }

    probarFecha(){
        let años= new Fecha(2020,2,21)
        console.log(`Años: ${años.getAños()}`);
        console.log(`Meses: ${años.getMeses()}`);
        console.log(`Semana: ${años.getSemanas()}`);
        console.log(`Dias: ${años.getDias()}`);
        console.log(`Fecha: ${años.getFecha()}`);
        console.log(`Dia de la semana: ${años.getDia()}`);
    }
    probarNombre(){
        let nombre1= new Nombre("Juan ","Ramos ","Campos ");
        console.log(nombre1.getNombreCompleto());
        console.log(nombre1.getApellidoNombre());
        console.log(nombre1.getIniciales());
    }

    probarTiempo(){
        let hora= new Tiempo(1,55,"pm")
        console.log(hora.getFormato12())
        console.log(hora.getFormato24())
    }

    probarPaciente(){
        let nombre= new Nombre("Rosa ","Campos ","Carrillo")
        let numero=(3121096996)
        let fecha= new Fecha(2000,2,15)
        let paciente= new Paciente(nombre,numero,fecha)
        console.log(paciente.getPerfil())



    }

}
let app=new Main();
app.probarFecha();
app.probarNombre();
app.probarTiempo();
app.probarPaciente();
