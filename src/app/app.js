/**
 * Created by xinzheng on 12/01/16.
 */
(function(){
    'use strict';
    var app = angular.module('app', ['ngRoute']);

    app.config( ['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/Expense/expense.html',
            })
            .when('/admin', {
                templateUrl: 'app/admin/admin.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

}());