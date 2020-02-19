class Fecha {
    constructor(año,mes,dia){
        this.fecha = new Date(año, mes -1, dia);
        this.mesesDelaño=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        this.diasDeSemana=["Lunes","Martes","Miercoles","Jueves","Vierenes","Sabado","Domingo"]


    }
}