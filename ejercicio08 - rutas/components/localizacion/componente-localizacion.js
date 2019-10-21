angular.
    module('angularApp').
    component('componenteLocalizacion', {
        templateUrl: './components/localizacion/template.html',
        controller: function ComponenteLocalizacionController() {

            console.trace('ComponenteLocalizacionController');
            
            $scope.localizacion = [];
            $scope.mostrar = false;

            $scope.localizar = function(){
                $scope. mostrar = true;
            };


            //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
            $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
                .then(function(data){
                    $scope.localizacion = data;
                });
            
        }
    });