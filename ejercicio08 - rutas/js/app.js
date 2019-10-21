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

app.service("pokemonProvider", PokemonProvider );
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


// Filtro personalizado para capitalizar la primera letra de un String

app.filter("capitalizar", function () {
    return function ( cadena ) {
        if ( cadena != undefined && typeof cadena == 'string') {
            return cadena.charAt(0).toUpperCase() + cadena.slice(1);
        }else{
            return "";
        }
    };
  });

// Filtro  que convierta "hoy es viernes a "hoy es VIErnes => {{| capitalizarCacho:7:10}}

app.filter("capitalizarCacho", function () {
    return function ( cadena, primer, ultimo ) {
        var nuevaCadena = "";

        if (cadena != undefined && typeof(cadena) == 'string' &&
            angular.isNumber(primer) && primer >= 0 &&
            angular.isNumber(ultimo) && ultimo > primer) {

            for(var i=0;i<cadena.length;i++) {
                if( (i >= primer && i<=ultimo)  ){
                    nuevaCadena = nuevaCadena + cadena.charAt(i).toUpperCase();
                }else{
                    nuevaCadena = nuevaCadena + cadena.charAt(i);
                }
            }

            return nuevaCadena;
        }else{
            return "";
        }
    };
  });


  app.controller(
    'notasController', // Nombre del controlador
    function ($scope) { // Programación del controlador

        $scope.notas = {
            "pepe": [{
                    "asignatura": "HTML",
                    "nota": 5
                },
                {
                    "asignatura": "CSS",
                    "nota": 8
                },
                {
                    "asignatura": "JS",
                    "nota": 7
                },
                {
                    "asignatura": "AngularJs",
                    "nota": 3
                }
            ]};
    });

   // app.controller('geoController', ['$http', '$scope', function($http, $scope){}]);