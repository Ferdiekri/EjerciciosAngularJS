app.controller('pokemonController', ['$scope', 'pokemonProvider', 
                                 function($scope, pokemonProvider){


    console.trace('pokemonController');

    // variables del scope del controlador
    $scope.titulo = "Listado de Pokémon";
    $scope.pokemon = [];
    $scope.poke = '';

    let promesa = pokemonProvider.listar();           
        promesa.then( 
            response=>{
                console.debug('Pokémon recuperados correctamente %o', response);
                $scope.pokemon = response.data.results;
            },
            response=>{
                console.warn('No se han recuperado Pokémon. ERROR %o', response);
            }
        );

    // Eventos
    this.$onInit = function(){
        console.trace('pokemonController onInit'); 

              

    }; // init


    // funciones
    ///////////////////////////////////////////////////////////////////////////
    $scope.sacarDetalle = (pokeName) => {
        let promesa = pokemonProvider.detalle(pokeName);
            promesa.then( 
                response=>{
                    console.debug('Pokémon recuperado correctamente %o', response);
                    $scope.poke = response.data.results;
                },
                response=>{
                    console.warn('No se ha recuperado el Pokémon. ERROR %o', response);
                }
            );

    } 
    

}]);
