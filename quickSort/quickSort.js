function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function pivot(
    arr,start=0,end=arr.length-1
){
    let pivot=arr[start]
    let swapIndex=start

    for (let i=start;i<=end;i++){
if (pivot>arr[i]){
    swapIndex++
    swap(arr,i,swapIndex)
}
    }

swap(arr,start,swapIndex)   
return swapIndex
}

console.log(pivot([9,8,2,1,5,10,7,6,3]))