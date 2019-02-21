// 冒泡排序：效率最低的排序算法，嵌套两层。
//遍历数组，将数组的每一项与数组进行比较，若不符合要求，就交换位置

//对数组进从小到大进行排序
function bubbleSort(arr){
  let len = arr.length;
  // 先找出最大的排在最后，再找出第二大……
  for(let i = 0;i<len;i++){
    // 二次遍历时，遍历数组前面的len-i项，后面i项已排号
    for(let j = 0;j<len-1-i;j++){
      if(arr[j]>arr[j+1]){
        //交换元素位置
        // let tmp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = tmp;
        //es6:
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([3,9,5,2,0,4]));
//[ 0, 2, 3, 4, 5, 9 ]