function kiemtrasonguyento(a) {
    let dem = 0;
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            dem++;
        }
    }
    if (dem === 0 && a > 1) {
        console.log(a + ' la so nguyen to');
    } else {
        console.log(a + ' k phai la so nguyen to');
    }
}
var a = prompt('nhap a: ');
a = Number(a);
kiemtrasonguyento(a);