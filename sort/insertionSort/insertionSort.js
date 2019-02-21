//插入排序：从数组的第二项开始遍历数组，遍历相对于该项左边的数组元素，若左边项大（小）于该项，左边项项右移，
//继续向左对比，直到找到小于或等于该项的元素，停止对比
//固定当前项不变，不断与左边项相比，直到比左边项大
function insertSort(arr){
  let len = arr.length;
  for(let i = 1;i<len;i++){
    let current = arr[i];
    let prevIndex = i-1;
    while(prevIndex>=0 && arr[prevIndex]>current){
      arr[prevIndex+1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex+1] = current;
  }
  return arr;
}
console.log(insertSort([3,5,2,6,7,1]));
