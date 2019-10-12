/* JavaScript para nuestra App */

var app = angular.module(
                            'profesorApp',  //Nombre de la App
                            []             //Para inyectar librerías
                         );

/* Controladores */

app.controller(
                'frutasController',     // Nombre del controlador
                function($scope){       // Programación del controlador

    $scope.precioTotal = 0;
    $scope.columna = 'nombre';
    $scope.orden = true;
    $scope.clase = "fas fa-sort-up";

    $scope.frutasJson = { "frutas": [
            {
                "nombre": "Manzana",
                "precio": 7,
                "imagen": "manzana.png",
                "cantidad": 0,
                "color": "rojo"
            },
            {
                "nombre": "Fresa",
                "precio": 5,
                "imagen": "fresa.png",
                "cantidad": 0,
                "color": "rojo"
            },
            {
                "nombre": "Pera",
                "precio": 1,
                "imagen": "pera.png",
                "cantidad": 0,
                "color": "verde"
            },
            {
                "nombre": "Kiwi",
                "precio": 2,
                "imagen": "kiwi.png",
                "cantidad": 0,
                "color": "marron"
            }
        ]
    };

    $scope.unoMenos = function(fruta){
        if (fruta.cantidad == 0) {
            
        }else{
            fruta.cantidad--;
        }

    }

    $scope.unoMas = function(fruta){
        fruta.cantidad++;

    }

    $scope.alCarrito = function(fruta){
        $scope.precioTotal = $scope.precioTotal + fruta.cantidad * fruta.precio;
        fruta.cantidad = 0;
    }
    
    $scope.resetearCarrito = function(){
        $scope.precioTotal = 0; 
        /*for (let index = 0; index < frutasJson.frutas.length; index++) {
            frutasJson.frutas[i].cantidad = 0;
            
        }*/
    }

    $scope.ordenar = function(campo){
       $scope.columna = campo;
       $scope.orden = !$scope.orden;
       console.log( "$scope.columna = ", campo );
       console.log( "$scope.orden = ", $scope.orden );

       if ($scope.orden) {
        $scope.clase = "fas fa-sort-up";
       }else{
        $scope.clase = "fas fa-sort-down";
       }


        //<i class="fas fa-sort-up"></i>
        //<i class="fas fa-sort-down"></i>

    }


    

});


// console.log( "click incrementar: %o ", fruta ); Imprime el objeto por consola.