 enum LetterScore {
  A = 1,
  E = 1,
  I = 1,
  O = 1,
  U = 1,
  L = 1,
  N = 1,
  R = 1,
  S = 1,
  T = 1,
  D = 2,
  G = 2,
  B = 3,
  C = 3,
  M = 3,
  P = 3,
  F = 4,
  H = 4,
  V = 4,
  W = 4,
  Y = 4,
  K = 5,
  J = 8,
  X = 8,
  Q = 10,
  Z = 10,
}

const wordScore = (word: string): number => {
    var value: number = 0;
    word = word.toUpperCase();
  
    for (let i = 0; i < word.length; i++) {
      value += LetterScore[word[i]];
    }
  
    return value;
  };
  
  console.log(wordScore("Hatem"));

  function Result() {
    var input = document.getElementById("Filed");
    document.getElementById("output").innerHTML = wordScore(input.value).toString();
}
document.getElementById("btn").addEventListener("click", Result);