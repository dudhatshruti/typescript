1.;
var y = function () {
    var a = 8;
    console.log("table 8 :", a * 1);
    console.log("table 8 :", a * 2);
    console.log("table 8 :", a * 3);
    console.log("table 8 :", a * 4);
    console.log("table 8 :", a * 5);
    console.log("table 8 :", a * 6);
    console.log("table 8 :", a * 7);
    console.log("table 8 :", a * 8);
    console.log("table 8 :", a * 9);
    console.log("table 8 :", a * 10);
};
console.log(y());
2.;
var two = function (a) {
    var square = a * a;
    return square;
};
console.log(two(5));
3.;
var three = function (p, t, r) {
    var pi = p * t * r / 100;
    return pi;
};
console.log(three(5, 8, 6));
4.;
var a = 29;
if (a % 5 == 0) {
    console.log("value is divisible by 5:", a);
}
else {
    console.log("value is not divisible by 5:", a);
}
5.;
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
