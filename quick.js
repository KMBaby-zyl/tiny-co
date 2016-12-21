function quick(arr){
    let i = 0;
    let j = arr.length - 1;
    let k = arr[i];

    while(j>i){
        if(arr[j] < k){
            let tmp = arr[j];
            arr[j] = arr[i]; 
            arr[i] = tmp;
        }else{
            j--;
        }
    }
}
