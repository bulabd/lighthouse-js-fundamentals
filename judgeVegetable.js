/*const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';*/
const vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
const metric = 'd'

const judgeVegetable = function (vegetables, metric) {
  let gradeArr = [];
  for (let i = 0; i < vegetables.length; i++) {
    gradeArr.push(vegetables[i][metric]);
  }
  gradeArr.sort((a, b) => a - b);
  let bestTomato = gradeArr[(gradeArr.length - 1)];
  for (let i = 0; i < vegetables.length; i++) {
    let winner;
    if (vegetables[i][metric] === bestTomato) {
      winner = vegetables[i].submitter;
      return winner;
    }
  }
}

console.log(judgeVegetable(vegetables, metric));