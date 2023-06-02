function sohoanhao(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (a % i == 0) {
            sum += i;
        }
    }
    if (sum == a) {
        console.log(a + ' la so hoan hao');
    } else {
        console.log(a + ' k phai la so hoan hao');
    }
}
var a = prompt('nhap a: ');
a = Number(a);
sohoanhao(a);