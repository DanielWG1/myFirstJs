let i;
for (i=100; i<1000; i++) {
    let a= i % 10;
    let b= ((i-a) % 100) /10;
    let c= (((i-a)-(b*10)) % 1000) /100;
    let sumCubes= a*a*a + b*b*b + c*c*c ;
    if (sumCubes===i) {
        console.log (sumCubes)
    }
    
}