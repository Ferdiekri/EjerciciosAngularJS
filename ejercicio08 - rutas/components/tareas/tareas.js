angular.
  module('angularApp').  
  component('listadoTareas', {   
    templateUrl: './components/tareas/template.html',
    controller: function ListadoTareasController($http, $scope) {

      console.trace('ListadoTareasController');  
      
      // propiedades
      /////////////////////////////////////////////////////////////////     
      $scope.titulo = "Listado Tareas";
      $scope.descripcion = "";
      $scope.mensajeValidacion = "";
      $scope.tareas = [];
      $scope.ENDPOINT = "http://localhost:3000/tareas/";
      //$scope.descripcionNueva = '';

      // eventos del controlador
      /////////////////////////////////////////////////////////////////

      this.$onInit = function(){
        console.trace('ListadoTareasController onInit');

        $http.get($scope.ENDPOINT)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);
                $scope.mensajeValidacion = "Error de conexión con WebService";

            });

      };



      // funciones
      /////////////////////////////////////////////////////////////////

      $scope.crearTarea = function(){
          console.trace('click boton crearTarea con descripcion=' + $scope.descripcion );

          let descripcion = $scope.descripcion.trim();
          if ( descripcion.length <= 2 ){

             $scope.mensajeValidacion = 'Por favor escribe una descripción mas larga';

          }else{

            console.trace('llamada post');
            $scope.mensajeValidacion = '';

            let data = {            
                "completada": false,
                "descripcion": descripcion
            };

            $http.post($scope.ENDPOINT, data)
                .then(function(response){   // success antiguo

                    console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
                   

                }, function(response){    // gestion del error

                    console.warn('Tenemos un ERROR response: %o' , response);

                });

          }

      } // crearTarea


      $scope.eliminarTarea = function( tarea ) {

            console.trace('click eliminarTarea %o', tarea);

            let url = $sce.trustAsResourceUrl( $scope.ENDPOINT + tarea.id );
            $http.delete( url ).then(function(response){   

                console.trace('reponse OK data=%o', response);               

            }, function(response){    

                console.warn('Tenemos un ERROR response: %o' , response);

            });


      };// eliminarTarea


      $scope.completado = function(tarea){

            console.trace('Click completar tarea %o', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            let data = {            
                "completada": !tarea.completada                
            };
            $http.patch( url , data ).then(function(response){   

                console.trace('reponse OK data=%o', response);               

            }, function(response){    

                console.warn('Tenemos un ERROR response: %o' , response);

            });

      }// completado


      
      
      $scope.modificarDescripcion = function(tarea){

        console.trace('Click modificarDescripcion tarea %o', tarea);
        let url = $scope.ENDPOINT + tarea.id;
        let data = {            
            "descripcion": tarea.descripcion                
        };
        $http.patch( url , data ).then(function(response){   

            console.trace('reponse OK data=%o', response);               

        }, function(response){    

            console.warn('Tenemos un ERROR response: %o' , response);

        });

  }// modificarDescripcion
  
  $scope.verTareas = function( opcion ) {

                console.trace('click verTareas()',);

                let url = '';
                if (opcion == null) {
                    url = $scope.ENDPOINT;
                }else{
                    url = $scope.ENDPOINT + '?completada=' + opcion;
                }

                $http.get(url)
                    .then(function(response){ // Success antiguo.
                        console.trace('Petición GET a %s', url);
                        $scope.tareas = response.data;
                        console.trace('resultados de data=%o', response.data);
                    },
                    function(response){ // gestión de error.
                        console.warn('Tenemos un ERROR %o: ', response);
                    });

            } // verTareas

            $scope.cambiarEstado = function( tarea ) {
                // tarea.completada = !tarea.completada;

                let data = {
                    "completada": !tarea.completada,
                    "descripcion": tarea.descripcion
                };

                let url = $scope.ENDPOINT + tarea.id;

                $http.put(url, data)
                    .then(function(response){ // Success antiguo.
                        console.trace('response OK data=%o', response);
                        $scope.mensajeValidacion = 'Tarea añadida satisfactoriamente.';
                    },
                    function(response){ // gestión de error.
                        console.warn('Tenemos un ERROR response %o: ', response);
                    });


            }; // cambiarEstado


    }
  });