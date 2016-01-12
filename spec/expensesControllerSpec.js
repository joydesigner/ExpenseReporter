/**
 * Created by xinzheng on 12/01/16.
 */
describe('expensesController', function(){
    var $controllerConstructor;
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;

        //scope = $rootScope.$new();
    }));

    it("should have 3 expense items", function(){
        var ctrl = $controllerConstructor('expensesController', {
            //$scope: scope
        });

        expect(ctrl.expenseItems.length).toEqual(3);
    });
});