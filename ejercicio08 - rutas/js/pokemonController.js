app.controller('pokemonController', ['$scope', 'pokemonProvider', 
                                 function($scope, pokemonProvider){


    console.trace('pokemonController');

    // variables del scope del controlador
    $scope.titulo = "Listado de Pokémon";

    // Eventos
    /*this.$onInit = function(){
        console.trace('pokemonController onInit');

        console.trace("pedimos a la API todos los pokemos");
        $scope.pokemon = {};
        pokemonProvider.cazarPokemon().then( data => $scope.pokemon = data );             

    }; // init*/

    console.trace("pedimos a la API todos los pokemos");
    $scope.pokemons = {};
    pokemonProvider.listarPokemon().then( data => $scope.pokemons = data );
    

}]);
