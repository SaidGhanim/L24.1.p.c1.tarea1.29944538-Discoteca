export default class Cl_rumbero{ 
    constructor(cedula, nombre, edad, sexo, precioEntrada){
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.precioEntrada = 25;
    }
    set cedula(cedula){
        this._cedula= cedula;
    }
    get cedula(){
        return this._cedula;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set edad(edad){
        this._edad = edad;
    }
    get edad(){
        return this._edad;
    }
    set sexo(sexo){
        this._sexo = sexo;
    }
    get sexo(){
        return this._sexo;
    }

pagoEntrada(){
    if(this._sexo == "M"){
        return this.precioEntrada;
    }else if(this.sexo == "F"){
        return this.precioEntrada*0.25;
    }
}
}