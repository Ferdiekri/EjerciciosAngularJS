app.controller('pokemonDetalleController', ['$scope', 'pokemonProvider', '$routeParams', 
                                 function($scope, pokemonProvider, $routeParams){


    console.trace('pokemonDetalleController');

    // variables recibidas de routeParams
    $scope.id = $routeParams.id;

    // variables del scope del controlador
    $scope.titulo = "Ficha Pokémon: ";
    $scope.fecha = "hoy es viernes.";
    $scope.pokemon = [];
    $scope.tipos = [];

    // Eventos
    this.$onInit = function(){
        console.trace('pokemonDetalleController onInit'); 

        let promesa = pokemonProvider.detalle($scope.id);
        promesa.then( 
            response=>{
                console.debug('Pokémon recuperado correctamente %o', response);
                $scope.pokemon = response.data;
                //$scope.tipos = $scope.pokemon.map( elem => elem.types );
            },
            response=>{
                console.warn('No se ha recuperado el Pokémon. ERROR %o', response);
            }
        );
    }; // init


    // funciones
    ///////////////////////////////////////////////////////////////////////////
    $scope.sacarDetalle = (pokeName) => {
        

    } 
    

}]);
