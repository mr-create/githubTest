var myModule= angular.module("myModule", []);

var myController = function($scope,$http) {

$scope.orders = null;
$scope.error = null;

$scope.getOrders = function() {
    $scope.loading = true;
    $http({
        method: "Get", url: 'http://www.json-generator.com/api/json/get/cgyOuQBrxe?indent=2'
    }).then(function(response) {
        $scope.loading = false;
        $scope.orders = response.data;

    }, function(reason) {
        $scope.loading = false;
        if(reason.status == -1){
            $scope.error = 'Unable to extract customers data. Error:\'Unable To Connect To The Server\'';
        }else{
        $scope.error = 'Unable to extract customers data. Error:\'' + reason.status +' '+ reason.statusText + '\'';
        }
    });
    $scope.loading == null;
}

}

myModule.controller("myController", myController);