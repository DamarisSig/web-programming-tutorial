 function countTo (n){
    for (;i<= n; i+=5){
        console.info(i);
        i++;
    }
 }

function addNumbers(a, b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b);
for (; b > 0;) {
    b--; // luam un deget de la b
    a++; // il punem la a

    console.info(a + ' - au mai ramas ' + b + ' degetele')
}
console.info('suma este: ' + a)
}

var count = addNumbers(5, 3);