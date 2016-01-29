hello.controller('HelloController', function ($scope, $http) {
    $scope.hellos = [];
    
    $scope.onGoClick = function () {
        $http.get('/api/Hello/' + $scope.who)
            .then(function (response) {
                $scope.hellos.push(response.data);
            }).catch(function (response) {
                $scope.hellos.push({
                    success: false,
                    requestDate: new Date(),
                    message: response.data
                });
            });
    }
});