class Sorter {
  constructor() {
    this.arr = [];
    this.temp = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    for (let i = 0; i < indices.length; i++) {
      this.temp.push(this.arr[indices[i]]);
    }
    this.temp.sort(function(a,b){
      return a - b;
    })
    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = this.temp[i];
    }  
  }

  setComparator(compareFunction) {
    return this.arr.sort(compareFunction);
  }
}

module.exports = Sorter;
