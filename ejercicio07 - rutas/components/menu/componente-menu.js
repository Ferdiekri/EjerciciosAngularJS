angular.
    module('angularApp').
    component('componenteMenu', {  // <componente-menu> </componente-menu>
        templateUrl: './components/menu/template.html',
        controller: function MenuController($scope) {

            console.trace('componenteMenu');

            $scope.rutas = [
                {
                  'nombre': 'Inicio',
                  'url': '#!/',
                  'active': true
                },
                {
                  'nombre': 'Frutas',
                  'url': '#!/frutas',
                  'active': false
                },
                {
                  'nombre': 'Componentes',
                  'url': '#!/componente',
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
            
              }; // cambiarActivo
            
        } // MenuController
    });