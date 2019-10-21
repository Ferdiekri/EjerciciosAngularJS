angular.
  module('angularApp').                 // Nombre App
  component('saludoUsuario', {             //Nombre Componente. Para usarlo <saludo-usuario> </saludo-usuario>
    template: 'Hola, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'mundo';
    }
  });