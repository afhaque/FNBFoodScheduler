var FNBScheduler = angular.module('FNBScheduler', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.initialize = function() {
        $http.get('/api/donors')
            .success(function(data){
                $scope.donors = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.createDonor = function(){
        $http.post('/api/donors', $scope.formData)
            .success(function(data) {
                $('input').val('');
                $scope.donors = data;
            })
            .error(function(data){
                console.log('Error: ' + data);
            });
    };
}