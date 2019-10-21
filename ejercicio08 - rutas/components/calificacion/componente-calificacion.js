angular.
module('angularApp').
component('componenteCalificacion', {
            templateUrl: './components/calificacion/template.html',
            bindings: {
                pnota: '@' // Parámetro de entrada, que es un atributo.
            },
            controller: function CalificacionController() {

                console.trace('CalificacionController');

                const NOTA_MIN = 0;
                const NOTA_MAX = 10;
                this.nota = 0;
                this.calificacion = 'Sin nota';
                this.estilo =  'text-body';

                // Evento para cuando se inicia el controlador.
                this.$onInit = function(){
                    console.trace('CalificacionController onInit()');
                    this.nota = this.pnota | Number; // +this.pnota --> El + es para convertirlo a entero
                    this.mostrarCalificacion();
                }

                this.menosNota = function () {
                    console.trace('click menosNota()');
                    if (this.nota > NOTA_MIN) {
                        this.nota--;
                    }
                    this.mostrarCalificacion();
                } // menosNota

                this.masNota = function () {
                    console.trace('click masNota()');
                    if (this.nota < NOTA_MAX) {
                        this.nota++;
                    }
                    this.mostrarCalificacion();
                } // masNota

                this.mostrarCalificacion = function () {
                    console.trace('click mostrarCalificacion()');
                    switch (this.nota) {
                        case 0:
                            this.calificacion = '¿Te has presentado?';
                            this.estilo =  'text-danger font-weight-bold';
                            break;
                        case 1:
                            this.calificacion = 'Demasiado suspendido';
                            this.estilo =  'text-danger';
                            break;
                        case 2:
                            this.calificacion = 'Muy Suspendido';
                            this.estilo =  'text-danger';
                            break;
                        case 3:
                            this.calificacion = 'Bastante Suspendido';
                            this.estilo =  'text-danger';
                            break;
                        case 4:
                            this.calificacion = 'Suspendido';
                            this.estilo =  'text-danger';
                            break;
                        case 5:
                            this.calificacion = 'Suficiente';
                            this.estilo =  'text-warning';
                            break;
                        case 6:
                            this.calificacion = 'Bien';
                            this.estilo =  'text-warning';
                            break;
                        case 7:
                            this.calificacion = 'Bastante Bien';
                            this.estilo =  'text-success';
                            break;
                        case 8:
                            this.calificacion = 'Muy Bien';
                            this.estilo =  'text-success';
                            break;
                        case 9:
                            this.calificacion = 'Casi Sobresaliente';
                            this.estilo =  'text-success';
                            break;
                        case 10:
                            this.calificacion = 'Sobresaliente';
                            this.estilo =  'text-success font-weight-bold';
                            break;
                        default:
                            this.calificacion = 'Sin nota';
                            this.estilo =  'text-body';
                            break;
                    } // switch
                } // mostrarCalificacion
            }
        });