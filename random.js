var listNum = document.getElementById("listNum");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var loopNum = Math.floor(Math.random() * (max - min +1)) + min;

  for (var i = 0; i < loopNum; i++) {
    min = Math.ceil(1);
    max = Math.floor(20);
    listNum.textContent += Math.floor(Math.random() * (max - min +1)) + min + " ";
  }
}

getRandom(10, 20);
