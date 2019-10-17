function PokemonProvider($http){

    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
  

    this.listar = function(){    
      console.log('pokemonProvider listar ' + ENDPOINT);
      return $http.get(ENDPOINT);
  
    }// listar

    this.listarDetallado = function( ruta ){    
      console.log('pokemonProvider listarDetallado ' + ruta);
      return $http.get(ruta);
  
    }// listarDetallado

    this.detalle = function( index ){    
      let url = ENDPOINT + index;
      console.log('pokemonProvider detalle ' + url);
      return $http.get(url);
      
    }// detalle
  
    this.detalleNom = function( nombrePokemon ){    
      let url = ENDPOINT + nombrePokemon;
      console.log('pokemonProvider detalle ' + url);
      return $http.get(url);
      
    }// detalleNom
  
  
  }