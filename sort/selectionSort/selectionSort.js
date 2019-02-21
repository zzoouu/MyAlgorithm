//选择排序，先选择最小（大）的一位排在第一位，再选择第二小（大）的排在第二位……
//从小到大
function selectionSort(arr){
  let len = arr.length;
  for(let i = 0;i<len;i++){
    //i之前的已经被排好
    let minIndex = i;
    for(let j = i+1;j<len;j++){
      if(arr[j] < arr[minIndex]){
        // 改变最小索引
        minIndex = j;
      }
    }
    if(arr[minIndex] != arr[i]){
      [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
    }
  }
  return arr;
}
// selectionSort([4,4,7,2,5,1]);
console.log(selectionSort([4,4,7,2,5,1]));