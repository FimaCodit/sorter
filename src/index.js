class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
   this.arr.push(element);
  
  }

  at(index) {
    return this.arr[i];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices = indices.sort(function(a,b){
      return a - b;
    })
  }

  setComparator(compareFunction) {
    // your implementation
  }
}



module.exports = Sorter;
