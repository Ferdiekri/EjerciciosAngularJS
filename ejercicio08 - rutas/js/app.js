var app = angular.module('angularApp',['ngRoute', 'ngSanitize']);


app.constant("servicioConstantes", {
    "titulo": "AngularApp",
    "idioma": "es-Es",
    "version": "1.0",
    "autor": "Eder Ibáñez Rojo",
    "github": "https://github.com/Ferdiekri/EjerciciosAngularJS"
    } );

/**
*  Servicio o Provider
*/

app.service("cancionProvider", CancionProvider );


/**
* Ejemplo Servicio a traves de una Clase
*/

// Clase Rectangulo
function Rectangulo() {
this.ancho=0;
this.alto=0;

this.setAncho=function(ancho) {
this.ancho=ancho;
}

this.setAlto=function(alto) {
this.alto=alto;
}  

this.getArea=function() {
return this.ancho * this.alto;
}
}

//definir Servicio
app.service("rectanguloService",Rectangulo);