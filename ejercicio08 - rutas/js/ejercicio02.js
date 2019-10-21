

/* Controladores */

app.controller(
    'profesorController', // Nombre del controlador
    function($scope){           // Programación del controlador

    // Propiedades (variables) del modelo  
    $scope.profesor = {
        nombre: "Profesor Oak",
        bio: "Saludos estudiante, mi nombre es Oak, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
        edad: 80,
        foto: "img/profesor.jpeg"
        } 
    $scope.editando = {};
    $scope.esVisible = false;
    $scope.animacion = "animated fadeInUp";

    // Funciones
    $scope.editar = function(){
        console.trace('click en el botón editar.');
        angular.copy( $scope.profesor, $scope.editando );
        $scope.esVisible = true;
    }

    $scope.cancelar = function(){
        console.trace('click en el botón editar.');
        $scope.editando = {};
        $scope.animacion = "animated fadeOutDown";
        $scope.esVisible = false;
    }

    $scope.guardar = function(){
        console.trace('click en el botón editar.');
        angular.copy( $scope.editando, $scope.profesor );
        $scope.esVisible = false;
    }

} ); //End profesorController

app.controller(
    'videoController',                  // Nombre del controlador
    function($scope, $timeout, $sce){   // Programación del controlador


    $scope.video = {           // Variable del modelo
        id: 3,
        nombre: "Trailer El Priorato del Naranjo",
        codigo: "xL6XRq2n0dk",
        categoria: {
        id: 3,
        nombre: "Música"
        },
        usuario: {
        id:23,
        nombre: "Ramoncin"
        },
        likes:1
    } 
    $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.video.codigo);

    $scope.latir = "";

    $scope.darLike = function(){
        $scope.video.likes++;
        $scope.latir = "animated pulse";
        $timeout(function(){
        $scope.latir = "";
        }, 1000);
    }   

    // Funciones
    $scope.getUrlVideo = function(){

    $scope.ruta = "https://www.youtube.com/embed/";
        console.trace("La ruta es: " + $scope.ruta.concat($scope.video.codigo));
        return  $scope.ruta.concat($scope.video.codigo); 

    }

} ); //End videoController


app.controller(
    'frutasController',     // Nombre del controlador
    function($scope){       // Programación del controlador


    $scope.frutas = ["Manzana", "Maracuya", "Kiwi", "Pera", "Fresa"];

    $scope.frutasJson = { "frutas": [
        {
        "nombre": "Manzana",
        "color": "Rojo"
        },
        {
        "nombre": "Maracuya",
        "color": "Lila"
        },
        {
        "nombre": "Kiwi",
        "color": "Verde"
        }
        ]
    };

    $scope.seleccionada = "";

    $scope.seleccionar = function(fruta, event){
        console.trace("Fruta: " + fruta);
        event.target.style.backgroundColor = 'yellow';
        $scope.seleccionada = "active";
    };


    $scope.setSelected = function(index) {
        $scope.selected = index;
        //TODO PONER EL SELECCIONADO EN AZUL
        console.log($scope.selected);
    }
});


