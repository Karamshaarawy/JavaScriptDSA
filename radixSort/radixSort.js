function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

function digitCount(num){
    if(num===0) return 1
    return Math.floor(Math.log10(Math.abs(num)))+1
}

function largestDigit(arr){
    let largestDigits=0

    for(let i=0;i<arr.length;i++){
        largestDigits=Math.max(largestDigits,digitCount(arr[i]))
    }
    return largestDigits
}

function radixSort(arr){
    let largestDigits=largestDigit(arr)
    for (let k=0;k<largestDigits;k++){
        let digitBuckets=Array.from({length:10},()=>[])
        for (let i=0;i<arr.length;i++){
            let position=getDigit(arr[i],k)
            digitBuckets[position].push(arr[i])
        }
        arr=[].concat(...digitBuckets)
    }
return arr
}