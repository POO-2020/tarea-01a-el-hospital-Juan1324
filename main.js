import Fecha from "./fecha.js";
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"


class Main{

    constructor(){

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

}
let app=new Main();
app.probarFecha();
app.probarNombre();
app.probarTiempo();