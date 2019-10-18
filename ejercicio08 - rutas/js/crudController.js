app.controller('crudController', ['$scope', 'cancionProvider', 
                                 function($scope, cancionProvider ){


    console.trace('crudController');

    // variables del scope del controlador
    $scope.titulo = "ejercicio CRUD contra Servicio Rest en Java";
    $scope.canciones = [];
    $scope.mensaje = null;
    $scope.mostrar = false;
    $scope.cancionEditar = [];

    // Eventos
    this.$onInit = function(){
        console.trace('crudController onInit'); 

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
            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.mensaje="Nombre de la canción ya existe.";
            }
        );
    } // nuevaCancion()

    $scope.eliminarCancion = ( canc ) => {

        console.trace('click eliminarCancion id: %s', canc.id);

        if( confirm('Estás seguro de eliminar la canción ' + canc.id + ' - ' + canc.nombre + '?') ){

            let p = cancionProvider.eliminar( canc.id );
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

        }

       

    } // eliminarCancion()

    $scope.editarCancion = ( cancionId, nuevoNombre ) => {
        console.trace('click editarCancion id: %s - nuevoNombre %s', cancionId, nuevoNombre);

        let p = cancionProvider.modificar(cancionId,nuevoNombre);
        p.then(
            (response) => {
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.mensaje="Canción modificada correctamente.";
                $scope.mostrar = false;
                $scope.nuevoNombre = null;
            },
            (response) => {
                console.warn('llamada INcorrecta %o', response);
            }
        );

    } // editarCancion()

    $scope.cambiarEstado = function( canc ){
        $scope.cancionEditar = canc;
    }
    

}]);
