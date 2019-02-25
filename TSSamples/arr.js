var ary1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumber = ary1.filter(getEven);
function getEven(x) {
    if (x % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(evenNumber);
