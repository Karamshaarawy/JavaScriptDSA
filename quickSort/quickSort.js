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

function quickSort(arr,left=0,right=arr.length-1){
    let index=pivot(arr,left,right)
    if(left<right){
        //left
        quickSort(arr,left,index-1)
        //right
        quickSort(arr,index+1,right)
    }
    return arr
}


let x=quickSort([5,8,7,9,5,48,84,8,54,2,54,454,845,4548,54,845,454,856,89,47,5562,215,354,8,8745,54654654,6454])
console.log(x)