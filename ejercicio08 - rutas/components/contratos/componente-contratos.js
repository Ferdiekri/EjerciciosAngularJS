angular.
    module('angularApp').
    component('componenteContratos', {  // <componente-contratos> </componente-contratos>
        templateUrl: './components/contratos/template.html',
        controller: function ContratosController($scope, $http) {

            console.trace('componenteContratos');

            $scope.ENDPOINT = "http://localhost:3000/contratos/";

            this.$onInit = function(){
              console.trace('componenteContratos onInit');

              $http.get($scope.ENDPOINT)
                  .then(function(response){   // success antiguo
      
                      console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                      $scope.tareas = response.data;
      
                  }, function(response){    // gestion del error
      
                      console.warn('Tenemos un ERROR response: %o' , response);
                      $scope.mensajeValidacion = "Error de conexión con WebService";
      
                  });
      
            };  // onInit()

            /*
            Obtengan todos los contratos cuyo campo TIPPRODUCT
            tenga un valor determinado, por ejemplo “KT” (filter).
            */
            $scope.tarea1 = $scope.contratos.filter( elem => elem.TIPPRODUCT =='KT' );
            $scope.tarea1Long = $scope.tarea1.length;

            /*
            Obtengan un nuevo array en el que cada elemento contenga
            el código de contrato concatenado con el digito de control (campos codCONTRAT y digContrat),
            además del saldo en euros (campo SALCONTRAT dividido entre 100) (map)
            */
            $scope.tarea2 =$scope.contratos.map( elem => {
                                                            return {
                                                              "codigo": ((elem.codCONTRAT)?elem.codCONTRAT:0) + '-' + ((elem.digContrat)?elem.digContrat:0),
                                                              "salario":  (    (   (elem.SALCONTRAT) ?elem.SALCONTRAT:0)    /100     )
                                                            }             
                                                          });
            $scope.tarea2Long = $scope.tarea2.length;

            /*
            Obtengan todos los contratos que en su campo acciones
            contengan la clave “SITUACION” (filter por la subestructura)
            */
            $scope.tarea3 = $scope.contratos.filter( elem => elem.ACCIONES ).filter( elem => elem.clave == "SITUACION" );
            $scope.tarea3Long = $scope.tarea3.length;

            /*Obtengan un array que contenga todas las acciones posibles (map y spread)*/
            $scope.tarea4 ='Tarea sin completar';
            $scope.tarea4Long = $scope.tarea4.length;
                      
            /*Combinaciones de las anteriores, etc*/
            $scope.tarea5 ='Tarea sin completar';
            $scope.tarea5Long = $scope.tarea5.length;
            
        } // MenuController
    });