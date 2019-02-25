var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.save = function () {
        console.log("Customer Saved");
    };
    return Customer2;
}());
function saveAndLog(c) {
    console.log("Before Save");
    c.save();
    console.log("After Save");
}
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.save = function () {
        console.log("Employee Saved");
    };
    return Employee;
}());
var obj2 = new Employee();
saveAndLog(obj2);
