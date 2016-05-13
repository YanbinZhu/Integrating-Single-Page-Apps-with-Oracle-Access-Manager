myApp.factory('errorService', ['$location', function ($location) {

    var message;

    var handleError = function (error, errorService) {
        if (error.status === -1) //redirect, when the user got session timeout, we will get error.status = -1 issue.
        {
            window.location.reload(true);
        } else {
            errorService.message = error.statusText;
            $location.path('/Error');
        }
    };
    return {
        message: message,
        handleError: handleError
    };
}]);
