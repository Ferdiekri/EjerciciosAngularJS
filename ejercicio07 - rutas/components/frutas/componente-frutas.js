angular.
    module('angularApp').
    component('componenteFrutas', {  // <componente-frutas> </componente-frutas>
        templateUrl: './components/frutas/template.html',
        controller: function FrutasController($scope, $http) {

            console.trace('componenteFrutas');
            $scope.ENDPOINT = 'http://localhost:3000/frutas/';
            $scope.frutas = {};
            $scope.frutasPaginadas = {};
            $scope.orden = 0;
            $scope.INTERVALO = 2;
            $scope.deshabilitadoIzq = true;
            $scope.deshabilitadoDer = false;
            $scope.Math = window.Math;
            $scope.paginas = 0;


            this.$onInit = function(){
                console.trace('FrutasController onInit()');
        
                $http.get($scope.ENDPOINT)
                    .then(function(response){   // success antiguo
        
                        console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                        $scope.frutas = response.data;
                        $scope.frutasPaginadas = $scope.frutas.slice($scope.orden, $scope.INTERVALO);

                        $scope.paginas = $scope.Math.ceil($scope.frutas.length/$scope.INTERVALO) ;
        
                    }, function(response){    // gestion del error
        
                        console.warn('Tenemos un ERROR response: %o' , response);
                        $scope.mensajeValidacion = "Error de conexión con WebService";
        
                    });
        
              }; // onInit

              $scope.ordenar = function(campo, ordenar){
                console.trace('ordenar()');

                $scope.columna = campo;
                $scope.orden = ordenar;
                console.log( "$scope.columna = ", $scope.columna );
                console.log( "$scope.orden = ", $scope.orden );
         
             } // ordenar

             $scope.verOtrasFrutas = function(direccion){

                console.trace('verOtrasFrutas()');
                console.trace('$scope.orden %o', $scope.orden);

                if (direccion) {
                    $scope.orden = $scope.orden + 2;                    
                    $scope.frutasPaginadas = $scope.frutas.slice($scope.orden, $scope.orden+$scope.INTERVALO);
                }else{
                    $scope.orden = $scope.orden - 2;
                    $scope.frutasPaginadas = $scope.frutas.slice($scope.orden, $scope.orden+$scope.INTERVALO);
                }

                if ( ($scope.orden == 0) ){
                    $scope.deshabilitadoIzq = true;
                }else{
                    $scope.deshabilitadoIzq = false;
                }

                if ( $scope.orden == ($scope.frutas.length-1) ) {
                    $scope.deshabilitadoDer = true;
                }else{
                    $scope.deshabilitadoDer = false;
                }

             } // verOtros


        } // FrutasController
    });