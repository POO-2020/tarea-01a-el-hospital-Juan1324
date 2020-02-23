import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main{

    constructor(){


    }

    probarFecha(){
        console.log("////////////////////Fecha///////////////////////////////////")
        let años= new Fecha(2,2,2001)
        console.log(`Años: ${años.getAños()}`);
        console.log(`Meses: ${años.getMeses()}`);
        console.log(`Semana: ${años.getSemanas()}`);
        console.log(`Dias: ${años.getDias()}`);
        console.log(`Fecha: ${años.getFecha()}`);
        console.log(`Dia de la semana: ${años.getDia()}`);
    }
    probarNombre(){
        console.log("////////////////////Nombres///////////////////////////////////")
        let nombre1= new Nombre("Juan ","Ramos ","Campos ");
        console.log(nombre1.getNombreCompleto());
        console.log(nombre1.getApellidoNombre());
        console.log(nombre1.getIniciales());
    }

    probarTiempo(){
        console.log("////////////////////Tiempo///////////////////////////////////")
        let hora= new Tiempo(1,55,"pm")
        console.log(hora.getFormato12())
        console.log(hora.getFormato24())
    }

    probarPaciente(){
        console.log("////////////////////Paciente///////////////////////////////////")
        let nombre= new Nombre("Sara ","Campos ","Gómez")
        let numerotel=("312-109-6996")
        let fecha= new Fecha(2000,2,15)
        let paciente= new Paciente(nombre,numerotel,fecha)
        console.log(paciente.getPerfil())

    }
    probarDoctor(){
        console.log("////////////////////Doctor///////////////////////////////////")
        let cedula=("JKDG324")
        let especialidad=("Neurologia")
        let nombre= new Nombre("Gregorio ","Ramos ","Ceballos")
        let numerotel=("312-109-9876")
        let doctor= new Doctor(cedula,especialidad,nombre,numerotel)
        console.log(doctor.getPerfil())

    }
    probarCita(){
        console.log("////////////////////Cita///////////////////////////////////")
        let fecha= new Fecha(5,10,2002)
        let hora= new Tiempo(1,44,"pm")
        let doctor= new Doctor("312-190-9898","Cardiologia",new Nombre("Dr.Gregorio ","Ramos ","Ceballos"),"JKDG324" )
        let paciente= new Paciente(new Nombre("Christian ","López ","Astilla"),new Fecha(1,10,2010),"312-182-9876")
        let cita= new Cita(fecha,hora,doctor,paciente)
        console.log(cita.getCita())
    }
    probarHospiltal(){
            console.log("////////////////////Lista de Doctores///////////////////////////////////")
            let doctor1= new Doctor("312-108-8987","Neurologia", new Nombre("Dr.Gregorio ","Ramos ","Ceballos"),"JKDG324" )

            let doctor2= new Doctor("312-279-3098","Neurocirujana", new Nombre("Dr.Cintia ","Martinez ","Zárate"),"PDHR935")

            let doctor3= new Doctor("312-279-3070","Neurocirujano", new Nombre("Dr.Carlos ","Nava ","Campos"),"PDKD937")

            let cita1= new Cita(new Fecha(1,4,2020),new Tiempo(15,50,"pm"),new Doctor("312-182-9876","Neurologia", new Nombre("Dr.Gregorio ","Ramos ","Ceballos"),"JKDG324"), new Paciente(new Nombre("Karen ","Oca ","Álvarez"),new Fecha(19,8,2020),"312-123-3679"))

            let cita2= new Cita(new Fecha(10,3,2020),new Tiempo(13,10,"pm"),new Doctor("312-287-9663","Neurocirujana", new Nombre("Dr.Cintia ","Martinez ","Zárate"),"PDHR935"), new Paciente(new Nombre("Celina ","Cervantes ","Villa señor"),new Fecha(11,4,2020),"312-182-1098"))

            this.hospital.registrarDoctor(doctor1)
            this.hospital.registrarDoctor(doctor2)
            this.hospital.registrarDoctor(doctor3)
            this.hospital.listarDoctores()
            console.log("////////////////////Lista de Citas///////////////////////////////////")
            this.hospital.registrarCita(cita1)
            this.hospital.registrarCita(cita2) 
            this.hospital.listarCitas()

      
       
        }

    }
let app=new Main();
app.probarFecha();
app.probarNombre();
app.probarTiempo();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospiltal();