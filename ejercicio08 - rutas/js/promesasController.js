app.controller('promesasController', ['$scope', '$http', '$q', '$timeout', function($scope, $http, $q, $timeout,){


    console.trace('promesasController');

    $scope.titulo = "Promesas - Ejercicio";
    $scope.sumar1 = 0;
    $scope.resultado1 = 'Sumando...';
    $scope.resultado2 = 'Sumando...';
    $scope.resultadoFinal = 'Esperando...';

    /**
     * Función asíncrona que retorna una promesa.
     * Usamos $q para el asincronismo puesto que JS es síncrono.
     * 
     * @param numero1: entero a sumar
     * @param numero2: entero a sumar
     * @param fallo: boolean para hacer que funcione o falle la promesa.
     * @param espera: tiempo en milisegundospara que termine la función.
     */
    $scope.sumar = function( numero1, numero2, fallo, espera ){

        console.trace('Sumar');
        var q = $q.defer();

        $timeout( function(){
            if( !fallo ){
                let num = numero1 + numero2;
                q.resolve( num ); // Funciona o se resuelve la promesa. ==> Then
            }else{
                q.reject('Lo sentimos pero falla.'); // Falla
            }

        }, espera);

        return q.promise
    } // sumar()

    // Vamos a llamar a la fucnión asíncrona.
    $scope.p1 = $scope.sumar(2, 2, false, 2000);
    $scope.p1
        .then(function(result){
            $scope.resultado1 = result;
            console.debug('Promesa2 cumplida. %o', result);
        })
        .catch(function(result){
            $scope.resultado1 = result;
            console.debug('Promesa2 NO cumplida. %o', result)
        });

    $scope.p2 = $scope.sumar(5, 5, false, 5000);
    $scope.p2
        .then(function(result){
            $scope.resultado2 = result;
            console.debug('Promesa cumplida. %o', result);
        })
        .catch(function(result){
            $scope.resultado2 = result;
            console.debug('Promesa NO cumplida. %o', result)
        });

    $q.all([$scope.p1,$scope.p2])
    .then(function(result){
        $scope.resultadoFinal = $scope.resultado1 + $scope.resultado2;
    })
    .catch(function(result){
        $scope.resultado2 = result;
    });
        
    // Vamos a esperar a las 2 promesas para que se cumplan las 2 y después sumar.
    

}]);