export default class Cl_Discoteca{
    constructor(){
        this.contRumberos = 0;
        this.contRumberas = 0;
        this.contRumberasMayEdad = 0;
        this.acumPrecioEntradas = 0;
    }

    procesarRumbero(ru){   
        this.acumPrecioEntradas += ru.pagoEntrada();
        if(ru.sexo == "M"){
            this.contRumberos++;
        }else if(ru.sexo == "F"){
            this.contRumberas++;
            if(ru.edad > 21){
                this.contRumberasMayEdad++;
            }
        }
    }

    TotalGanado(){
        return this.acumPrecioEntradas;
    }

    PorcentajeRumberasMayEdad(){
        return (this.contRumberasMayEdad/this.contRumberas)*100;
    }   

    SexoMasAsistido(){
        if(this.contRumberos > this.contRumberas){
            return "HOMBRES";
        }else if(this.contRumberas > this.contRumberos){
            return "MUJERES";
        }else{
            return "AMBOS POR IGUAL";
        }
    }

    devolverTotalGanado(){
        return this.acumPrecioEntradas;
    }
}



   
    




