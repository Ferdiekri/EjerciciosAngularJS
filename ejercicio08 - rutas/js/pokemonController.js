app.controller('pokemonController', ['$scope', 'pokemonProvider', 
                                 function($scope, pokemonProvider){


    console.trace('pokemonController');

    // variables del scope del controlador
    $scope.titulo = "Listado de Pokémon";
    $scope.pokemon = [];
    $scope.pokemonDetallado = [];
    $scope.poke = '';

    // Eventos
    this.$onInit = function(){
        console.trace('pokemonController onInit'); 

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

        /*$scope.pokemon.forEach((poke)=>{
            console.debug('Dentro del forEach()');
            let indice = poke.url.split('pokemon/')[1];
            let promesa2 = pokemonProvider.detalle(indice);
            promesa2.then( 
                response=>{
                    console.debug('Pokémon recuperados correctamente %o', response);
                    $scope.pokemonDetallado.push(response.data);
                },
                response=>{
                    console.warn('No se han recuperado Pokémon. ERROR %o', response);
                }
            );
        }; // forEach*/
              

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
