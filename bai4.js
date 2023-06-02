function nhap() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
console.log("các số đã nhâp: ")
var n = nhap(1, 2, 3);
function findtong(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(findtong(1, 2));;
function findmax(){
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findmax(1, 10, 132,));;
function findmin(){
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(findmin(1, 142, 124, -10));;

