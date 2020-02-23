import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main{

    constructor(){
        this.años= new Fecha(2,2,2001)
        
        this.nombre1= new Nombre("Juan ","Ramos ","Campos ");
        
        this.hora1= new Tiempo(1,40,"pm")
        
        this.paciente1= new Paciente(new Nombre("Carlos ","Ramirez ","Cedillo"),"312-109-8921",new Fecha(12,10,2018))
        this.paciente2= new Paciente(new Nombre("Germán ","Martínez ","Zantolla"),"312-109-8921",new Fecha(12,10,2018))
        this.paciente3= new Paciente(new Nombre("José ","Macias ","Olivera"),"312-109-8921",new Fecha(12,10,2018))
        
        this.doctor1= new Doctor("JSGD343","Cirujano",new Nombre("Christian ","Mora ","Trujillo"),"312-102-1029")
        this.doctor2= new Doctor("PSJD394","Neurologo",new Nombre("Belén ","Sánchez ","Cruz"),"312-982-4029")
        this.doctor3= new Doctor("JSGD343","Pedíatra",new Nombre("Alexa ","Vega ","Trujillo"),"312-332-4923")

        this.cita1= new Cita(new Fecha(13,10,2020),new Tiempo(5,25,"pm"),this.doctor1,this.paciente1)
        this.cita2= new Cita(new Fecha(9,3,2020),new Tiempo(7,30,"am"),this.doctor2,this.paciente2)
        this.cita3= new Cita(new Fecha(23,9,2020),new Tiempo(3,20,"pm"),this.doctor3,this.paciente3)

    }

    probarFecha(){
        console.log("////////////////////Fecha///////////////////////////////////") 
        console.log(`Años: ${this.años.getAños()}`);
        console.log(`Meses: ${this.años.getMeses()}`);
        console.log(`Semana: ${this.años.getSemanas()}`);
        console.log(`Dias: ${this.años.getDias()}`);
        console.log(`Fecha: ${this.años.getFecha()}`);
        console.log(`Dia de la semana: ${this.años.getDia()}`);
    }
    probarNombre(){
        console.log("////////////////////Nombres///////////////////////////////////")
        console.log(this.nombre1.getNombreCompleto());
        console.log(this.nombre1.getApellidoNombre());
        console.log(this.nombre1.getIniciales());
    }

    probarTiempo(){
        console.log("////////////////////Tiempo///////////////////////////////////")
        console.log(this.hora1.getFormato12())
        console.log(this.hora1.getFormato24())
    }

    probarPaciente(){
        console.log("////////////////////Paciente///////////////////////////////////")
        console.log(this.paciente1.getPerfil())

    }
    probarDoctor(){
        console.log("////////////////////Doctor///////////////////////////////////")
        console.log(this.doctor1.getPerfil())

    }
    probarCita(){
        console.log("////////////////////Cita///////////////////////////////////")
        console.log(this.cita1.getCita())
    }
    probarHospiltal(){
            this.hospital.registrarDoctor(this.doctor1)
            this.hospital.registrarDoctor(this.doctor2)
            this.hospital.registrarDoctor(this.doctor3)
            this.hospital.listarDoctores()
            console.log("////////////////////Lista de Citas///////////////////////////////////")
            this.hospital.registrarCita(this.cita1)
            this.hospital.registrarCita(this.cita2)
            this.hospital.registrarCita(this.cita3) 
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