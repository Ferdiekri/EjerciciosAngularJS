angular.
    module('angularApp').
    component('componenteLocalizacion', {
        templateUrl: './components/localizacion/template.html',
        controller: function ComponenteLocalizacionController($scope, $http, $sce) {

            console.trace('ComponenteLocalizacionController');

            $scope.ENDPOINT = $sce.trustAsResourceUrl( "http://www.geoplugin.net/json.gp" );       
            $scope.localizacion = [];

            this.$onInit = function(){
                console.debug('ComponenteLocalizacionController onInit()');
        
                $http.get($scope.ENDPOINT)
                    .then(function(response){
                        $scope.localizacion = response.data;
                        console.debug('response.data: %o', response.data);
                        console.debug('$scope.localizacion: %o', $scope.localizacion);
                    });
        
            }; // onInit

            $scope.geolocalizar = function(){
                console.trace('click boton');
    
                    $scope.initMap();
    
            };// geolocalizar
    


            $scope.initMap = function() {

                console.trace('initMap');
                var myLatLng = { 
                                    lat: +$scope.localizacion.geoplugin_latitude, 
                                    lng: +$scope.localizacion.geoplugin_longitude
                                };
        
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 10,
                  center: myLatLng
                });
        
                var marker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                  title: "Estas en " + $scope.data.geoplugin_city
                });
    
            }; // initMap()


            



            







        }
    });