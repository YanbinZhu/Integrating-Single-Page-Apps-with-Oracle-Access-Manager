/*global window: false */
(function () {
    "use strict";
    window.myApp = angular.module('SinglePageApplicationOAM', [
'ngRoute',
'ui.bootstrap'
]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

        $httpProvider.interceptors.push('responseObserver');

        $routeProvider
            .when('/Home', {
                templateUrl: 'app/Home/Home.html',
                controller: 'HomeCtrl'
            })
            .when('/Contact', {
                templateUrl: 'app/Contact/Contact.html',
                controller: 'codeCtrl'
            })
            .when('/Error', {
                templateUrl: 'app/Error/Error.html',
                controller: 'errorCtrl'
            });
}]).factory('responseObserver', function responseObserver($q, errorService) {
        return {
            'responseError': function (errorResponse) {
                if (errorResponse.status == -1) {
                    window.location.reload(true);
                } else {
                    errorService.message = errorResponse.statusText;
                    errorService.handleError(errorResponse, errorService);
                }
                return $q.reject(errorResponse);
            }
        };
    });
})();
