// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componentes',{
      templateUrl: 'parciales/componentes.html'
    })
    .when('/componentes2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/profesores',{
        templateUrl: 'parciales/profesores.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
  })
    .otherwise({
      redirectTo: '/'
    })

})
