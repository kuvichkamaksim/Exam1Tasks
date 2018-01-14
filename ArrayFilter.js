const a = ['hello', ['1', 2, [false, ()=>{}, ['yes', 'no'], Math.pi]]];

const doSort = (arr) => {
  return arr.reduce(function(flat, toFlatten){
    return flat.concat(Array.isArray(toFlatten) ?
     doSort(toFlatten) : toFlatten )
  },[])
};

const flatArr = doSort(a);

const funcDestroyerWrap = (arr) => {
  for (let i in arr) {
    if (typeof(arr[i]) === 'function') {arr[i] = arr[i].apply()};
  };
  return arr;
};

const doneArr = funcDestroyerWrap(flatArr);

function clear(arr) {
  return arr.filter((item) => (item ? item : false))
};

console.log(clear(doneArr));
