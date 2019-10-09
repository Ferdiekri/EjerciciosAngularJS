var app = angular.module('angularApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";
  $scope.rutas = [
    {
      'nombre': 'Inicio',
      'url': '#!/',
      'active': true
    },
    {
      'nombre': 'Porfesores',
      'url': '#!/profesores',
      'active': false
    },
    {
      'nombre': 'Componente HTML',
      'url': '#!/componente1',
      'active': false
    },
    {
      'nombre': 'Componente a pelo',
      'url': '#!/componente2',
      'active': false
    },
    {
      'nombre': 'Creditos',
      'url': '#!/creditos',
      'active': false
    },
  ];

  $scope.cambiarActivo = function( ruta ){
    console.trace('click cambiarActivo() %o', ruta);
    $scope.rutas.forEach(element => {
      element.active = false;
    });
    ruta.active = true;

  };

}]);
