import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"

class Main{

    constructor(){

    }

    probarFecha(){
        let años= new Fecha(2,2,2001)
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
        let nombre= new Nombre("Sara ","Campos ","Gómez")
        let numerotel=("312-109-6996")
        let fecha= new Fecha(2000,2,15)
        let paciente= new Paciente(nombre,numerotel,fecha)
        console.log(paciente.getPerfil())

    }
    probarDoctor(){
        let cedula=("JKDG12KJDSHJ")
        let especialidad=("Neurologia")
        let nombre= new Nombre("Gregorio ","Ramos ","Ceballos")
        let numerotel=("312-109-9876")
        let doctor= new Doctor(cedula,especialidad,nombre,numerotel)
        console.log(doctor.getPerfil())

    }
    probarCita(){
        let fecha = new Fecha(5,10,2002)
        let hora = new Tiempo(1,44,"pm")
        let doctor = new Doctor("213131444","Cardiologia",new Nombre("Dr.Cordoba","",""),"JKDG324" )
        let paciente = new Paciente(new Nombre("Christian ","López ","Astilla"))
        let cita = new Cita(fecha,hora,doctor,paciente)
        console.log(cita.getCita())
    }

}
let app=new Main();
app.probarFecha();
app.probarNombre();
app.probarTiempo();
app.probarPaciente();
app.probarDoctor();
app.probarCita();