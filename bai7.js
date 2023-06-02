function kiemtrasonguyento(a) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return 0;
        }
    }
    return a > 1;
}
function insonguyento(){
    for (var i = 0; i < arguments.length; i++) {
        if (kiemtrasonguyento(arguments[i])) {
            console.log(arguments[i]);
        }
    } 
}
insonguyento(1, 2, 3, 5, 6, 7)