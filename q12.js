let a= 3;
let b= 5;
let sum= 0;
for (i=1; i<1000; i++) {
    if (i%a===0 || i%b===0) {
        sum += i;
    }
}
console.log (sum);