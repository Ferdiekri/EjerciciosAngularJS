function PokemonProvider($http){

    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
  

    this.listar = function(){    
      console.log('pokemonProvider listar ' + ENDPOINT);
      return $http.get(ENDPOINT);
  
    }// listar
  
    this.detalle = function( nombrePokemon ){    
      let url = ENDPOINT + nombrePokemon;
      console.log('pokemonProvider detalle ' + url);
      return $http.get(url);
      
    }// detalle
  
  
  }