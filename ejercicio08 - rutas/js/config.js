/**
 * Configuración de las rutas de la App.
 * @see components/menu
 */

app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente',{
      templateUrl: 'parciales/componentes.html'
    })
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        templateUrl: 'parciales/frutas.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/filtros',{
      template: '<componente-fmr></componente-fmr>'
    })
    .when('/contratos',{
      template: '<componente-contratos></componente-contratos>'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/crud',{
      templateUrl: 'parciales/crud.html'
    })
    .when('/formulario',{
      templateUrl: 'parciales/formulario.html'
    })
    .when('/pokemon',{
      templateUrl: 'parciales/pokemon.html',
      controller: 'pokemonController'
    })
    .when('/detallePokemon/:nombre',{
      templateUrl: 'parciales/detallePokemon.html',
      controller: 'pokemonDetalleController'
    })
    .otherwise({
      redirectTo: '/'
    })

})