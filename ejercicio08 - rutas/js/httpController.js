app.controller('httpController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

    $scope.profesores = [];
    $scope.ocultar = false;

    // Petición hhtpRequest mediante Ajax. Es ASÍNCRONA.

    //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
    
    console.debug('Llamada asíncrona.');

    $timeout( function(){

        $http.get('js/profesores.json')
        .then(function (data) {
            console.trace('response OK %o', data);
            $scope.ocultar = true;
            $scope.profesores = data;
        });

    }, 2000);

    console.debug('Seguimos ejecutando otras sentencias.');

}]);