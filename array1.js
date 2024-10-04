
    let  arr = [4,5,0,1,9,0,5,0];

    let index2=0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != 0) {
          arr[index2]=arr[index];
          index2++;

        } 
    }
    while (index2<arr.length) {
       arr[index2]=0;
       index2++;
    }


    console.log(arr); 

// Output: [4, 5, 1, 9, 5, 0, 0, 0]
