"use strict"

module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.max()}
o) 元素数量 = ${sequence.count()}
o) 平均值 = ${sequence.average()}`);
// Write your code here
};

class Sequence {
  constructor(input) {
  var sequence = new Array(input);
  this.sequence = input;
  }

  minimum() {
    return Math.min.apply(null, this.sequence);
  }//返回数组中最小元素

  max() {
    return Math.max.apply(null, this.sequence);
  }//返回数组中最大元素

  average() {
    var sum = 0;
    for(var i = 0; i<this.sequence.length; i++) {
      sum = sum + this.sequence[i];
    }
    var avr = sum/this.sequence.length;
    avr = avr.toFixed(2);
    return avr;
  }//返回数组中所有元素平均值

  count() {
    return this.sequence.length;
  }//返回数组中元素个数



  // Write your code here
}
