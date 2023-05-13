// function calculateMinCost() {
// const ropeLengthsStr = document.getElementById('rope-lengths').value;
// const ropeLengthsArr = ropeLengthsStr.split(',').map(Number);
// const n = ropeLengthsArr.length;

// let pq = [];
// for (let i = 0; i < n; i++) {
// pq.push(ropeLengthsArr[i]);
// }
// pq.sort(function (a, b) { return a - b; });

// let res = 0;
// while (pq.length > 1) {
// let first = pq.shift();
// let second = pq.shift();
// res += first + second;
// pq.push(first + second);
// pq.sort(function (a, b) { return a - b; });
// }
function calculateMinCost() {
    //your code here
    let ropes = document.querySelector("#rope-lengths").value;
    let result = document.querySelector("#result");
      let arr = ropes.split(", ");
      let sum = 0;
      while(arr.length > 1){
        arr.sort((a, b)=> a-b);
        let a = arr.shift();
        let b = arr.shift();
        let c = +a + +b;
        sum += c;
        arr.push(c);
      }
      result.textContent = `The minimum cost of ropes ${sum}`;
  }
// document.getElementById('result').textContent = res;
// }