
let numFound = 0;
for (i=1; numFound<5; i++) {
    let numbers = [];
    let num = i;
    do {
        if (numbers.indexOf(num) >= 0){
            break;
        }
        numbers.push(num);
        let sqNum = 0;

        do {
            d = num % 10;
            sqNum += d*d;
            num = (num - d) / 10;
        } while (num > 0)
        if (sqNum === 1) {
            console.log(i);
            numFound++;
            break;
        } else {
            num = sqNum;
        }
    } while (true)
}