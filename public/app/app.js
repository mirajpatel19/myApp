var app = angular.module('myApp', [
    'ngRoute'
    ])

    .config(function ($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        $routeProvider
    .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'homectrl'
    })
    .when('/homebetter', {
        templateUrl: '/app/homeBetter/homebetter.html',
        controller: 'homebetterctrl'
    })
    .when('/orders', {
        templateUrl: '/app/orders/orders.html',
        controller: 'orderctrl'
    })
    .when('/picklist', {
        templateUrl: '/app/picklist/picklist.html',
        controller: 'picklistctrl'
    })
    .when('/payroll', {
        templateUrl: '/app/payroll/payroll.html',
        controller: 'payrollctrl'
    })
    .when('/setprices', {
        templateUrl: '/app/setprices/setprices.html',
        controller: 'setpricesctrl'
    })
    .otherwise({redirectTo: '/'});
});

//Service
app.service('myService', function($rootScope) {
    var serviceOrder = {};

    fillOrder = function(myOrders) {
        serviceOrder = myOrders;
        serviceOrder.serviceValue = "True";
    }

    getOrder = function() {
        return serviceOrder;
    }

    return {
        fillOrder : fillOrder,
        getOrder : getOrder
    }
});
