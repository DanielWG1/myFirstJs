let inputList=[0, -4, -2, 8];
let swap;
    let n = inputList.length-1;
    let sortedList=inputList;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (sortedList[i] < sortedList[i+1])
            {
               let temp = sortedList[i];
               sortedList[i] = sortedList[i+1];
               sortedList[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
    alert (sortedList [0]);
