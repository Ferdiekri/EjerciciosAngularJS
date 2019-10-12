angular.
    module('angularApp').
    component('componenteAlert', {  // <componente-alert> </componente-alert>
        templateUrl: './components/alert/template.html',
        bindings: {
            pclase: '@',
            ptexto: '@'
        },
        controller: function AlertController() {

            console.trace('componenteAlert');
/*
            $self = this;
            $Self.alerta = {};

            this.alerta = {
                'texto': 'success',
                'clase': 'success'
            };

            // TODO cargar los valores de la alerta al inicio de la aplicación.

            this.onInit = function() {

                console.trace('componenteAlert onInit()');
                $self.alerta = {
                    'texto': $self.ptexto,
                    'clase': $self.pclase
                };
            } //onInit*/
            
        } // AlertController
    });