const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let moveTracker = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      moveTracker[1]++;
    } else if (moves[i] === 'south') {
      moveTracker[1]--;
    } else if (moves[i] === 'east') {
      moveTracker[0]++;
    } else {
      moveTracker[0]--;
    }
  }
  return moveTracker;
}

console.log(finalPosition(moves));