function arrayShift(arr,n) {
    for(let i=0; i<n;i++){
        arr.push(arr.shift());
      }
      return arr;
  }
  console.log( arrayShift([1,2,3,4,5,6],2));