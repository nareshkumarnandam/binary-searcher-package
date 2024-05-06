
function binarySearch(arr , x){
    let start = 0
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start/end) / 2);
        if(arr[mid] === x){
            return true;
        }else if(arr[mid] < x){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return false;
}



let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

const result = binarySearch(arr, x);

if(result === true){
    console.log("Element found!!");
}else{
    console.log("Element not found!!");
}

// https://github.com/nareshkumarnandam/binary-searcher-package.git