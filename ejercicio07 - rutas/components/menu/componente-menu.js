angular.
    module('angularApp').
    component('componenteMenu', {  // <componente-menu> </componente-menu>
        templateUrl: './components/menu/template.html',
        controller: function MenuController($scope) {

            console.trace('componenteMenu');

            $scope.rutas = [
                {
                  'icono': 'fas fa-home',
                  'nombre': 'Inicio',
                  'url': '#!/',
                  'active': true
                },
                {
                  'icono': 'fas fa-pepper-hot',
                  'nombre': 'Frutas',
                  'url': '#!/frutas',
                  'active': false
                },
                {
                  'icono': 'fas fa-laptop-code',
                  'nombre': 'Componentes',
                  'url': '#!/componente',
                  'active': false
                },
                {
                  'icono': 'far fa-credit-card',
                  'nombre': 'Creditos',
                  'url': '#!/creditos',
                  'active': false
                },
                {
                  'icono': 'fas fa-filter',
                  'nombre': 'Filter, Map & Reduce',
                  'url': '#!/filtros',
                  'active': false
                },
                {
                  'icono': 'fas fa-file-signature',
                  'nombre': 'Contratos',
                  'url': '#!/contratos',
                  'active': false
                }
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