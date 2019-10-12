angular.
    module('angularApp').
    component('componenteBoton', {  // <componente-boton> </componente-boton>
        templateUrl: './components/boton/template.html',
        controller: function BotonController() {

            console.trace('BotonController');

            this.titulo = 'Eder';
            this.contador = 0;

            this.sumarBoton = function(){
                console.trace('click sumarBoton()');
                this.contador++;
            }

            this.restarBoton = function(){
                console.trace('click sumarBoton()');
                this.contador--;
            }
        }
    });