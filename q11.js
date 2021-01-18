let a= 30;
let b= 20;
let min= a<b? a : b;
let gcd=1;
for (i=2; i<=min; i++) {
    if (a % i===0 && b % i===0) {
        gcd = i;
    }
}
console.log (gcd);