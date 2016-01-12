/**
 * Created by xinzheng on 12/01/16.
 */
function ExpenseItem(type, description, amount) {
    this.amount = amount;
    this.type = type;
    this.description = description;
};

ExpenseItem.prototype.isReasonable = function(){
    return this.amount <= 100;
}