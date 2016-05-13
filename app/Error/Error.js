myApp.controller('errorCtrl', function($scope, errorService) {
    $scope.message = errorService.message===undefined ? "" : ("'" + errorService.message + "'");
});
