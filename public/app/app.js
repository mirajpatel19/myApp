var app = angular.module('myApp', [
    'ngRoute'
    ])

    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
    .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'homectrl'
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

//test
app.service('myService', function($rootScope) {
    const obj = {};
    console.log('inside myService');

    fillOrder = function(myOrders) {
        obj.myOrderService = myOrders;
        console.log('filling the order');
        console.log($rootScope.myOrderService);
    }

    getOrder = function() {
        console.log('into getOrder function');
        console.log(obj.myOrderService);
        return obj.myOrderService;
    }

    return {
        fillOrder : fillOrder,
        getOrder : getOrder
    }
});
