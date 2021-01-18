let grades= [20, 30, 25];
let total = 0;
for(let i = 0; i < grades.length; i++) {
    total += grades[i];
}
let avg = total / grades.length;

if (avg<60) {
    console.log("F");
}
else if (avg<70) {
    console.log("D");
}
else if (avg<80) {
    console.log("C");
}
else if (avg<90) {
    console.log("B");
}
else if (avg<100) {
    console.log("A");
}

