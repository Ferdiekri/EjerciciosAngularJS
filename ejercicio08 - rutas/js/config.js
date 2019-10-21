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
    .when('/detallePokemon/:id',{
      templateUrl: 'parciales/detallePokemon.html',
      controller: 'pokemonDetalleController'
    })
    .when('/ejercicios',{
      templateUrl: 'parciales/ejercicios.html',
    })
    .when('/ejercicio01',{
      templateUrl: 'parciales/ejercicios/ejercicio01.html',
    })
    .when('/ejercicio02',{
      templateUrl: 'parciales/ejercicios/ejercicio02.html',
    })
    .when('/ejercicio03',{
      templateUrl: 'parciales/frutas.html',
    })
    .when('/ejercicio04',{
      templateUrl: 'parciales/ejercicios/ejercicio04.html',
    })
    .when('/ejercicio05',{
      templateUrl: 'parciales/ejercicios/ejercicio05.html',
    })
    .when('/ejercicio06',{
      templateUrl: 'parciales/ejercicios/ejercicio06.html',
    })
    .when('/ejercicio07',{
      templateUrl: 'parciales/ejercicios/ejercicio07.html',
    })
    .otherwise({
      redirectTo: '/'
    })

})