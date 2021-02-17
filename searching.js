function binarySearch(arr, val, start, end){
    let start = start === undefined ? 0 : start;
    let end = end === undefined ? arr.length : end

    if (start > end) {
        return -1
    }

    const index = Math.floor((start+end)/2)
    const item = arr[index]

    console.log(start, end)

    if (item == val) {
        return index
    }
    else if (item < val) {
        return binarySearch(arr, val, index+1, end)
    }
    else if (item < val) {
        return binarySearch(arr, val, index-1, end)
    }
}

// 1. 