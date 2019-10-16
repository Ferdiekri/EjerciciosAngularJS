app.controller('crudController', ['$scope', 'cancionProvider', 
                                 function($scope, cancionProvider){


    console.trace('crudController');

    // variables del scope del controlador
    $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";
    $scope.canciones = [];
    $scope.mensaje = null;

    // Eventos
    this.$onInit = function(){
        console.trace('crudController onInit'); 

        /*
        TODO ponerlo donde sea neceario
        cancionProvider.listar();
        cancionProvider.detalle(1);
        cancionProvider.eliminar(2);
        cancionProvider.crear("Mockito");
        cancionProvider.modificar(1,"Cambiada Cancion 1");
        */

       $scope.refrescar();
        

    }; // init
    

    $scope.refrescar = function(){

        let promesa = cancionProvider.listar();           
        promesa.then( 
            response=>{
                console.debug('Llamada Rest OK %o', response);
                $scope.canciones = response.data;
                $scope.nombre = null;
            },
            response=>{
                console.warn('Llamada Rest ERROR %o', response);
            }
        );

    } // refrescar()


    // funciones
    ///////////////////////////////////////////////////////////////////////////

    $scope.nuevaCancion = ( nombre ) => {

        console.trace('click nuevaCancion nombre %s', nombre);
        //TODO validacion

        let p = cancionProvider.crear( nombre );
        p.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.mensaje="Canción creada correctamente.";
                $scope.titulo = "Introduce canción";
            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
            }
        );
    } // nuevaCancion()

    $scope.eliminarCancion = ( id ) => {

        console.trace('click eliminarCancion id: %s', id);

        let p = cancionProvider.eliminar( id );
        p.then(
            (response) => {
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.mensaje="Canción eliminada correctamente.";
            },
            (response) => {
                console.warn('llamada INcorrecta %o', response);
            }
        );

    } // eliminarCancion()
    

}]);
