function pt1(a, b)
{
    if(Number(a) && Number(b))
    {
        if(a == 0)
        {
            if(b == 0)
            {
                console.log('phương trình vô số nghiệm');
            }
            else
            {
                console.log('phương trình vô nghiệm');
            }
        }
        else
        {
            console.log('phương trình có nghiệm duy nhất là:', - b / a);
        }
    }
    else
    {
        console.log("vui long nhap lai");
    }
    
}
var a = prompt('nhap so a: ');
var b = prompt('nhap so b: ');
a = Number(a);
b = Number(b);
pt1(a ,b);