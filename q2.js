

if (x===0 || y===0 || z===0) {
    alert ('0');
    
} else {

    let numNegative=0;
    if (x<0) {
        numNegative++;
    }
    if (y<0) {
        numNegative++;
    }

    if (z<0) {
        numNegative++;

    }

    if (numNegative % 2===0) {
        alert ('+');
    } else {
        alert ('-');
    }
}