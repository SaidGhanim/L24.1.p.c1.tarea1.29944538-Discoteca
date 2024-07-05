/*
Una discoteca desea llevar el control de sus ganancias. Para esto conoce de cada rumbero: su 
cédula, nombre, edad y sexo. Cada entrada tiene un costo dependiendo del sexo, si es chico
vale 25$ y si es chica cuesta un 25% del valor del chico. Por Noche, la discoteca desea saber: 
a) Pago que realiza cada rumbero b) Total Ganado, c) Porcentaje de rumberas mayores a 21 
años, d) Cual sexo asistió más a la discoteca. 
La discoteca suministra la siguiente información demostrativa, para 4 rumberos: (cedula, 
nombre, edad, sexo) (134, Luis, 23, M) (154, Ana, 22, F) (324, José, 18, M) 
(286, Carmen, 19, F), según lo cual la salida requerida presenta el siguiente formato: 
Pago que realiza Luis 25$ 
Pago que realiza Ana 6.25$ 
Pago que realiza José 25$ 
Pago que realiza Carmen 6.25$ 
Total Ganado 62.50$ 
Porcentaje de rumberas mayores a 21 años: 50% 
El sexo que más asistió a la discoteca es: AMBOS POR IGUAL*/

import Cl_Discoteca from "./Cl_Discoteca.js";
import Cl_rumbero from "./Cl_rumbero.js";

let discoteca = new Cl_Discoteca();
let rumbero1 = new Cl_rumbero(134, "Luis", 23, "M", 25);
let rumbero2 = new Cl_rumbero(154, "Ana", 22, "F", 25);
let rumbero3 = new Cl_rumbero(324, "Jose", 18, "M", 25);
let rumbero4 = new Cl_rumbero(286, "Carmen", 19, "F", 25);
discoteca.procesarRumbero(rumbero1);
discoteca.procesarRumbero(rumbero2);
discoteca.procesarRumbero(rumbero3);
discoteca.procesarRumbero(rumbero4);

let salida= document.getElementById("salida")
salida.innerHTML+= "Resultados: <br>";
salida.innerHTML+= "Pago que realiza Luis: "+ rumbero1.pagoEntrada()+"$ <br>";
salida.innerHTML+= "Pago que realiza Ana: "+ rumbero2.pagoEntrada()+"$ <br>";
salida.innerHTML+= "Pago que realiza José: "+ rumbero3.pagoEntrada()+"$ <br>";
salida.innerHTML+= "Pago que realiza Carmen: "+ rumbero4.pagoEntrada()+"$ <br>";
salida.innerHTML+= "Total Ganado: "+ discoteca.devolverTotalGanado()+"$ <br>";
salida.innerHTML+= "Porcentaje de rumberas mayores a 21 años: "+ discoteca.PorcentajeRumberasMayEdad()+"% <br>";
salida.innerHTML+= "El sexo que mas asistio a la discoteca es: "+ discoteca.SexoMasAsistido();