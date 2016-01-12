/**
 * Created by Admin on 12/01/2016.
 */
describe('expensesDataService', function(){
    beforeEach(module('app'));

    it('Should return three expense items', inject(function(expensesDataService){
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

    it('should return a taxi expense', inject(function (expensesDataService) {
        var expensItems = expensesDataService.getExpenses();
        var testExpenseItem = new ExpenseItem('Taxi', 'To airport', 89.95);
        expect(expensItems).toContain(testExpenseItem);
    }));

    describe('resonable expenses', function(){
        var taxi;
        var dinner;

        beforeEach(function(){
            jasmine.addMatchers(customMatchers);
        });

        beforeEach(function () {
           taxi = new ExpenseItem('taxi', 'Taxi to airport', 89.50);
            dinner = new ExpenseItem('dinner', 'Dinner with John and Ward', 189.90);
        });

        it('taxi should be a reasonable expense', function () {
            expect(taxi).toBeAResonableExpense();
        });
    });


});