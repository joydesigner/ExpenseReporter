/**
 * Created by xinzheng on 12/01/16.
 */
describe("expense obj", function() {
    var expense,
        expenseItem;

    beforeEach(function(){
        expenseItem = new ExpenseItem(100);
        expense = new Expense(expenseItem);
    });

    it("should be of type ExpenseItem", function(){
        expect(expense.expenseItem).toBe(expenseItem);
    });

    it("should have the correct expense amount", function(){
        expect(expense.expenseItem.amount).toEqual(100);
    });
});