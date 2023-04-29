/* 
Opciones de Pago
Opción 1:  30% de enganche y 70% contra entrega precio de lista 
Opción 2:  20% de enganche - 30% a 18 mensualidades y 50% contra entrega, precio de lista.
Opción 3:  20% de enganche - 70% a 18 meses y 10% contraentrega (al que elija esto le dan el precio de contado como premio)
*/

var DepaNumber;

function DepaOpcionPago1(){
  switch(DepaNumber)
  {
    case "Depa1A":
      return Depa1AOpcionPago1();
    break;

    case "Depa1B":
      return Depa1BOpcionPago1();
    break;

    case "Depa1C":
      return Depa1COpcionPago1();
    break;

    case "Depa1D":
      return Depa1DOpcionPago1();
    break;

    case "Depa1E":
      return Depa1EOpcionPago1();
    break;

    case "Depa1F":
      return Depa1FOpcionPago1();
    break;

    case "Depa2A":
      return Depa2AOpcionPago1();
    break;

    case "Depa2B":
      return Depa2BOpcionPago1();
    break;

    case "Depa2C":
      return Depa2COpcionPago1();
    break;

    case "Depa2D":
      return Depa2DOpcionPago1();
    break;

    case "Depa2E":
      return Depa2EOpcionPago1();
    break;

    case "Depa2F":
      return Depa2FOpcionPago1();
    break;
  }
  
}

function DepaOpcionPago2(){
  switch(DepaNumber)
  {
    case "Depa1A":
      return Depa1AOpcionPago2();
    break;

    case "Depa1B":
      return Depa1BOpcionPago2();
    break;

    case "Depa1C":
      return Depa1COpcionPago2();
    break;

    case "Depa1D":
      return Depa1DOpcionPago2();
    break;

    case "Depa1E":
      return Depa1EOpcionPago2();
    break;

    case "Depa1F":
      return Depa1FOpcionPago2();
    break;

    case "Depa2A":
      return Depa2AOpcionPago2();
    break;

    case "Depa2B":
      return Depa2BOpcionPago2();
    break;

    case "Depa2C":
      return Depa2COpcionPago2();
    break;

    case "Depa2D":
      return Depa2DOpcionPago2();
    break;

    case "Depa2E":
      return Depa2EOpcionPago2();
    break;

    case "Depa2F":
      return Depa2FOpcionPago2();
    break;
  }
}

function DepaOpcionPago3(){
  switch(DepaNumber)
  {
    case "Depa1A":
      return Depa1AOpcionPago3();
    break;

    case "Depa1B":
      return Depa1BOpcionPago3();
    break;

    case "Depa1C":
      return Depa1COpcionPago3();
    break;

    case "Depa1D":
      return Depa1DOpcionPago3();
    break;

    case "Depa1E":
      return Depa1EOpcionPago3();
    break;

    case "Depa1F":
      return Depa1FOpcionPago3();
    break;

    case "Depa2A":
      return Depa2AOpcionPago3();
    break;

    case "Depa2B":
      return Depa2BOpcionPago3();
    break;

    case "Depa2C":
      return Depa2COpcionPago3();
    break;

    case "Depa2D":
      return Depa2DOpcionPago3();
    break;

    case "Depa2E":
      return Depa2EOpcionPago3();
    break;

    case "Depa2F":
      return Depa2FOpcionPago3();
    break;
  }
}

/* 
  INFO
*/
function Depa1A() {
  document.getElementById("depto").innerHTML = "1 A";
  document.getElementById("areatotal").innerHTML = "72.14m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/1A.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,416,690";
  DepaNumber = "Depa1A";
}

function Depa1AOpcionPago1(){
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$725,007";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,691,683";
  document.getElementById("preciofinal").innerHTML = "$2,416,690"; /*"$2,223,355";*/
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1AOpcionPago2(){
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$483,338";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $40,278";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,208,345";
  document.getElementById("preciofinal").innerHTML = "$2,416,690";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1AOpcionPago3(){
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$435,004";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $84,584";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$217,502";
  document.getElementById("preciofinal").innerHTML = "$2,175,021";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa1B() {
  document.getElementById("depto").innerHTML = "1 B";
  document.getElementById("areatotal").innerHTML = "73.87m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/1B.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,474,645";
  DepaNumber = "Depa1B";
}

function Depa1BOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$742,393";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,732,251";
  document.getElementById("preciofinal").innerHTML = "$2,474,645";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1BOpcionPago2(){  
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$494,929";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $41,244";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,237,322";
  document.getElementById("preciofinal").innerHTML = "$2,474,645";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1BOpcionPago3(){  
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$445,436";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $86,613";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$222,718";
  document.getElementById("preciofinal").innerHTML = "$2,227,181";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa1C() {
  document.getElementById("depto").innerHTML = "1 C";
  document.getElementById("areatotal").innerHTML = "73.87m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/1C.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,474,645";
  DepaNumber = "Depa1C";
}

function Depa1COpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$742,393";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,732,252";
  document.getElementById("preciofinal").innerHTML = "$2,474,645"; /*"$2,276,673";*/
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1COpcionPago2(){  
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$494,929";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $41,244";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,237,322";
  document.getElementById("preciofinal").innerHTML = "$2,474,645";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1COpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$445,436";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $86,613";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$222,718";
  document.getElementById("preciofinal").innerHTML = "$2,227,181";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa1D() {
  document.getElementById("depto").innerHTML = "1 D";
  document.getElementById("areatotal").innerHTML = "76.15m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/1D.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,551,025";
  DepaNumber = "Depa1D";
}

function Depa1DOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$765,307";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,785,717";
  document.getElementById("preciofinal").innerHTML = "$2,551,025";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1DOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$510,205";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $42,517";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,275,512";
  document.getElementById("preciofinal").innerHTML = "$2,551,025";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1DOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$459,185";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $89,286";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$229,593";
  document.getElementById("preciofinal").innerHTML = "$2,295,923";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa1E() {
  document.getElementById("depto").innerHTML = "1 E";
  document.getElementById("areatotal").innerHTML = "73.87m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/1E.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,474,645";
  DepaNumber = "Depa1E";
}

function Depa1EOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$742,393";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,732,251";
  document.getElementById("preciofinal").innerHTML = "$2,474,645";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1EOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$494,929";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $41,244";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,237,322";
  document.getElementById("preciofinal").innerHTML = "$2,474,645";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1EOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$445,436";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $86,613";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$222,718";
  document.getElementById("preciofinal").innerHTML = "$2,227,181";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa1F() {
  document.getElementById("depto").innerHTML = "1 F";
  document.getElementById("areatotal").innerHTML = "74.37m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/1F.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,491,395";
  DepaNumber = "Depa1F";
}

function Depa1FOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$747,418";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,743,977";
  document.getElementById("preciofinal").innerHTML = "$2,491,395"; /*"$2,292,083";*/
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1FOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$498,279";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $41,524";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,245,698";
  document.getElementById("preciofinal").innerHTML = "$2,491,395";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa1FOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$448,452";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $87,199";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$224,226";
  document.getElementById("preciofinal").innerHTML = "$2,242,256";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa2A() {
  document.getElementById("depto").innerHTML = "2 A";
  document.getElementById("areatotal").innerHTML = "74.37m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/2A.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,491,395";
  DepaNumber = "Depa2A";
}

function Depa2AOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$687,625";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,604,458";
  document.getElementById("preciofinal").innerHTML = "$2,292,083";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2AOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$498,279";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $41,524";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,245,698";
  document.getElementById("preciofinal").innerHTML = "$2,491,395";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2AOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$448,452";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $87,199";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$224,226";
  document.getElementById("preciofinal").innerHTML = "$2,242,256";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa2B() {
  document.getElementById("depto").innerHTML = "2 B";
  document.getElementById("areatotal").innerHTML = "73.85m2";
  document.getElementById("amenidades").innerHTML = "1 Recámara, 1 Baño Completo, Cocina, Sala, Comedor, 1 Medio Baño, Área de Lavado, Bodega, 1 Estacionamiento Techado";
  document.getElementById("floorplant").src = "img/2B.png";
  document.getElementById("floorplant2").src = "";
  document.getElementById("preciodelista").innerHTML = "$2,473,975";
  DepaNumber = "Depa2B";
}

function Depa2BOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$682,818";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,593,239";
  document.getElementById("preciofinal").innerHTML = "$2,276,057";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2BOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$494,795";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $41,233";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$1,236,986";
  document.getElementById("preciofinal").innerHTML = "$2,473,975";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2BOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$445,316";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $86,590";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$222,658";
  document.getElementById("preciofinal").innerHTML = "$2,226,578";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa2C() {
  document.getElementById("depto").innerHTML = "2 C";
  document.getElementById("areatotal").innerHTML = "144.38m2";
  document.getElementById("amenidades").innerHTML = "2 Niveles, 3 Recámaras, 3 Baños Completos, Cocina, Sala, Comedor, Área de Lavado, Bodega, 2 Estacionamientos Techados"; 
  document.getElementById("floorplant").src = "img/2C_PB.png";
  document.getElementById("floorplant2").src = "img/2C_PA.png";
  document.getElementById("preciodelista").innerHTML = "$4,475,780";
  DepaNumber = "Depa2C";
}

function Depa2COpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$1,235,316";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,882,402";
  document.getElementById("preciofinal").innerHTML = "$4,117,718";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2COpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$895,156";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $74,597";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,237,890";
  document.getElementById("preciofinal").innerHTML = "$4,475,780";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2COpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$805,640";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $156,653";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$402,820";
  document.getElementById("preciofinal").innerHTML = "$4,028,202";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa2D() {
  document.getElementById("depto").innerHTML = "2 D";
  document.getElementById("areatotal").innerHTML = "142.81m2";
  document.getElementById("amenidades").innerHTML = "2 Niveles, 3 Recámaras, 3 Baños Completos, Cocina, Sala, Comedor, Área de Lavado, Bodega, 2 Estacionamientos Techados"; 
  document.getElementById("floorplant").src = "img/2D_PB.png";
  document.getElementById("floorplant2").src = "img/2D_PA.png";
  document.getElementById("preciodelista").innerHTML = "$4,427,110";
  DepaNumber = "Depa2D";
}

function Depa2DOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$1,221,883";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,851,058";
  document.getElementById("preciofinal").innerHTML = "$4,072,941";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2DOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$885,422";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $73,786";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,213,555";
  document.getElementById("preciofinal").innerHTML = "$4,427,110";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2DOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$796,880";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $154,949";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$398,440";
  document.getElementById("preciofinal").innerHTML = "$3,984,399";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa2E() {
  document.getElementById("depto").innerHTML = "2 E";
  document.getElementById("areatotal").innerHTML = "145.09m2";
  document.getElementById("amenidades").innerHTML = "2 Niveles, 3 Recámaras, 3 Baños Completos, Cocina, Sala, Comedor, Área de Lavado, Bodega, 2 Estacionamientos Techados"; 
  document.getElementById("floorplant").src = "img/2E_PB.png";
  document.getElementById("floorplant2").src = "img/2E_PA.png";
  document.getElementById("preciodelista").innerHTML = "$4,497,790";
  DepaNumber = "Depa2E";
}

function Depa2EOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$1,241,391";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,896,576";
  document.getElementById("preciofinal").innerHTML = "$4,137,967";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2EOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$899,558";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $74,964";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,248,895";
  document.getElementById("preciofinal").innerHTML = "$4,497,790";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2EOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$809,603";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $157,423";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$404,801";
  document.getElementById("preciofinal").innerHTML = "$4,048,011";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

function Depa2F() {
  document.getElementById("depto").innerHTML = "2 F";
  document.getElementById("areatotal").innerHTML = "146.17m2";
  document.getElementById("amenidades").innerHTML = "2 Niveles, 3 Recámaras, 3 Baños Completos, Cocina, Sala, Comedor, Área de Lavado, Bodega, 2 Estacionamientos Techados"; 
  document.getElementById("floorplant").src = "img/2F_PB.png";
  document.getElementById("floorplant2").src = "img/2F_PA.png";
  document.getElementById("preciodelista").innerHTML = "$4,531,270";
  DepaNumber = "Depa2F";
}

function Depa2FOpcionPago1(){   
  document.getElementById("enganchetext").innerHTML = "• 30% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$1,250,631";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "-";
  document.getElementById("contraentregatext").innerHTML = "• 70% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,918,137";
  document.getElementById("preciofinal").innerHTML = "$4,168,768";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2FOpcionPago2(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$906,254";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "30% en 18 mensualidades de $75,522";
  document.getElementById("contraentregatext").innerHTML = "50% Saldo (contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$2,265,635";
  document.getElementById("preciofinal").innerHTML = "$4,531,270";
  document.getElementById("descuento").innerHTML = "-";
}

function Depa2FOpcionPago3(){   
  document.getElementById("enganchetext").innerHTML = "20% de Enganche:";
  document.getElementById("precioenganche").innerHTML = "$815,629";
  document.getElementById("mensualidadestext").innerHTML = "Mensualidades:";
  document.getElementById("preciomensualidades").innerHTML = "70% en 18 mensualidades de $158,595";
  document.getElementById("contraentregatext").innerHTML = "10% Saldo(contra entrega):";
  document.getElementById("preciocontraentrega").innerHTML = "$407,815";
  document.getElementById("preciofinal").innerHTML = "$4,078,143";
  document.getElementById("descuento").innerHTML = "*Esta opción otorga un 10% de descuento sobre precio de lista";
}

//===

