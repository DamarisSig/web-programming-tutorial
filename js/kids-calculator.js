 function countTo (n){
    for (;i<= n; i+=5){
        console.info(i);
        i++;
    }
 }

function addNumbers(a, b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b);

    var suma = a; // nr cel mai mare
    var degete = b; // nr cel mai mic

    if (a < b){
        suma = b;
        degete = a;

    }
while (degete > 0) {
    degete--; // luam un deget de la b
    suma++; // il punem la a

    console.info(suma + ' - au mai ramas ' + degete + ' degetele')
}
console.info('suma este: ' + suma)
}

var count = addNumbers(2, 6);