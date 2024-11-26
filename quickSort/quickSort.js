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

    for (let i=0;i<=end;i++){
if (pivot>arr[i]){
    swapIndex++
    swap(arr,i,swapIndex)
}
    }

swap(arr,start,swapIndex)   
return swapIndex
}

function quickSort(arr,left=0,right=arr.length-1){
    let index=pivot(arr,left,right)
}


l