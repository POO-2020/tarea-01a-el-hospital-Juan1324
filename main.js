import Fecha from "./fecha.js";
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js";

class Main{

    constructor(){
        this.paciente1=new Paciente("Juan Ramos Campos", new Fecha(12,2,2005), "312-345-566");

    }

    probarFecha(){
        let años= new Fecha(new Date(2000,1,10))
        console.log(años.getAños());
        console.log(años.getMeses());
        console.log(años.getSemanas());
        console.log(años.getDias());
        console.log(años.getFecha());
        console.log(años.getDia());
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
        console.log(this.paciente1.getPerfil());

    }

}
let app=new Main();
app.probarFecha();
app.probarNombre();
app.probarTiempo();
app.probarPaciente();