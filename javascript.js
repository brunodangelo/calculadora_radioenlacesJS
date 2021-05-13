function init(){
  var resultado1 = document.getElementById('resultado1');
  var tituloresultado1 = document.getElementById('tituloresultado1');
  var tituloresultado2 = document.getElementById('tituloresultado2');
  var resultado2 = document.getElementById('tituloresultado2');
  var calcular = document.getElementById('calcular');
  var limpiar = document.getElementById('limpiar');
}

calcular.onclick = function(e){
  var f = parseFloat(document.getElementById("frecuencia").value);
  var d = parseFloat(document.getElementById("distancia").value);
  var d1 = parseFloat(document.getElementById("distancia1").value);
  var n = parseFloat(document.getElementById("ene").value);
  var k = parseFloat(document.getElementById("factork").value);
  var hobs = parseFloat(document.getElementById("alturaobs").value);
  var d2 = parseFloat(d - d1);
  var r, robs, flecha=0, despejamiento=0, alturaantena;
  resetear();//me aseguro que no hay texto previo
  if(f>0 && d>=d1 && d>0 && d1>=0)
  {
    tituloresultado1.innerHTML ='RADIOS DE FRESNEL HASTA n: ' + n + '<br>';
    for (var i=1; i <= n; i++){
    r=(548 * (Math.sqrt(((i)*(d1)*(d2))/((f)*(d))))).toFixed(2);//radio sin limitar aun
    resultado1.innerHTML += ('Radio ' + i + ' de Fresnel: ' + r + ' metros <br>');//imprimo en pantalla el resultado. innerHTML porque contine contenido html y texto
      if (i==1){
        robs=(0.6*r).toFixed(2);//Limito a 2 decimales
      }
    }
    tituloresultado2.innerHTML ='DATOS DEL OBSTACULO Y LA ANTENA <br>';
    resultado2.innerHTML = '60% primer Radio de Fresnel: ' + robs + ' metros<br>';
    if (hobs>=0 && (k==1.33 || k==0.67 || k==1)){
      flecha = (((d1)*(d2)/(2*k*(6370)))*1000).toFixed(2); //calculo y pasaje a metros
    }
    if (hobs>=0 && k==3){ //k=3 no hay flecha
      flecha = 0;
    }
    alturaantena = (parseFloat(flecha) + parseFloat(hobs) + parseFloat(robs)).toFixed(2);
    despejamiento = (parseFloat(robs)).toFixed(2);
    resultado2.innerHTML += 'Despejamiento: '+ despejamiento + ' metros <br>' +  'Flecha: ' + flecha + ' metros<br>' + 'Altura de la antena: ' + alturaantena + ' metros';
  }
  else{
    resultado1.innerHTML = 'Por favor introduzca datos válidos.';
  }
}

limpiar.onclick = function(e){ //falta implementar
  resetear();
}

function resetear(){
  resultado1.innerHTML ="";
  resultado2.innerHTML="";
  tituloresultado1.innerHTML = "";
  tituloresultado2.innerHTML="";
}
