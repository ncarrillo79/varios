

/*OBJETO XMLHTTPREQUEST: PROPIEDADES

//El objeto predefinido XMLHttpRequest es fundamental en la forma de
 comunicación o tecnología que denominamos Ajax para intercambiar 
 información en segundo plano con un servidor.El objeto XMLHttpRequest
  es un objeto predefinido que nos provee de propiedades y métodos para
   manejar el intercambio de información en segundo plano con el servidor.

var xhr  = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/ncarrillo79');
xhr.send(null);

/*onreadystatechange:
Sirve para definir una función que será llamada automáticamente cada
vez que cambie la propiedad readyState del objeto.

readyState:
Contiene un valor numérico entero que representa la situación del 
intercambio de datos a través del objeto.

responseText:
Una vez completada la comunicación, responseText contiene la
 respuesta del servidor en forma de cadena de texto*/

 var xhr=new XMLHttpRequest();
 xhr.open('GET', 'https://api.github.com/users/ncarrillo79');
        xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState==4) {
        console.log(JSON.parse(xhr.responseText));
    }
}


