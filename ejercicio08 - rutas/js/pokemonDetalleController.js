app.controller('pokemonDetalleController', ['$scope', 'pokemonProvider', '$routeParams', 
                                 function($scope, pokemonProvider, $routeParams){


    console.trace('pokemonDetalleController');

    // variables recibidas de routeParams
    $scope.nombre = $routeParams.name;

    // variables del scope del controlador
    $scope.titulo = "Detalle de Pokémon";
    $scope.poke = '';

    let promesa = pokemonProvider.detalle($scope.nombre);
        promesa.then( 
            response=>{
                console.debug('Pokémon recuperado correctamente %o', response);
                $scope.poke = response.data;
            },
            response=>{
                console.warn('No se ha recuperado el Pokémon. ERROR %o', response);
            }
        );

    // Eventos
    this.$onInit = function(){
        console.trace('pokemonDetalleController onInit'); 

              

    }; // init


    // funciones
    ///////////////////////////////////////////////////////////////////////////
    $scope.sacarDetalle = (pokeName) => {
        

    } 
    

}]);
