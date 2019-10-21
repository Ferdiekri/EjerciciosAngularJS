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
                } ,
                {
                  'icono': 'fas fa-pray',
                  'nombre': 'Promesas',
                  'url': '#!/promesas',
                  'active': false
                },
                {
                  "nombre": "Servicios",
                  "url": "#!/servicios",
                  "active": false,
                  "icono": "fas fa-server"
                },
                {
                  "nombre": "CRUD",
                  "url": "#!/crud",
                  "active": false,
                  "icono": "fas fa-music"
                },
                {
                  "nombre": "Formulario",
                  "url": "#!/formulario",
                  "active": false,
                  "icono": "fas fa-file-alt"
                },
                {
                  "nombre": "Pokémon",
                  "url": "#!/pokemon",
                  "active": false,
                  "icono": "fas fa-gamepad"
                },
                {
                  "nombre": "Ejercicios Anteriores",
                  "url": "#!/ejercicios",
                  "active": false,
                  "icono": "fas fa-tasks"
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