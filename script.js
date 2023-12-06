let i, j;

function begin() {
  document.getElementById("btnBegin").disabled = true;
  document.getElementById("btnEnd").disabled = false;
  document.getElementById("btnClick1").disabled = false;

  document.getElementById("horse-1").style.display = "none";
  document.getElementById("horse-2").style.display = "none";

  let x = document.getElementById("mytable").getElementsByTagName("td");
  x[20].innerHTML = '<img height="80px" src="image/horse-1.jpg">';
  x[40].innerHTML = '<img height="80px" src="image/horse-2.jpg">';
  (i = 20), (j = 40);

  let y = document.getElementById("tableShagai").getElementsByTagName("td");
  y[0].innerHTML = '<img height="100px" src="image/mori.png" />';
  y[1].innerHTML = '<img height="100px" src="image/temee.png" />';
  y[2].innerHTML = '<img height="100px" src="image/honi.png" />';
  y[3].innerHTML = '<img height="100px" src="image/yamaa.png" />';

  document.getElementById("btnClick2").disabled = true;
}

function end() {
  window.location.reload();
}

function shagaiOrhih() {
  let shagai = [
    "",
    '<img height="100px" src="image/mori.png" />',
    '<img height="100px" src="image/temee.png" />',
    '<img height="100px" src="image/honi.png" />',
    '<img height="100px" src="image/yamaa.png" />',
  ];
  let tool = 0;

  let y = document.getElementById("tableShagai").getElementsByTagName("td");

  for (let a = 0; a < 4; a++) {
    let randomSh = Math.floor(Math.random() * 4 + 1);
    y[a].innerHTML = shagai[randomSh];
    //console.log("random= ", randomSh);
    if (randomSh == 1) {
      tool++;
    }
  }
  return tool;
}

function btnClick1() {
  let x;
  if (i < 39) {
    x = document.getElementById("mytable").getElementsByTagName("td");
    x[i].innerHTML = '<img height="80px" src="image/horse-shadow.jpg">';

    i = i + shagaiOrhih();

    if (i >= 39) {
      document.getElementById("p1").innerHTML = "ялагч боллоо";
      x[39].innerHTML = '<img height="80px" src="image/horse-1.jpg">';
      document.getElementById("btnClick1").remove();
      document.getElementById("btnClick2").disabled = true;
      document.getElementById("player-1").style.color = "red";
    } else {
      x[i].innerHTML = '<img height="80px" src="image/horse-1.jpg">';
      document.getElementById("btnClick1").disabled = true;
      document.getElementById("btnClick2").disabled = false;
    }
  }

  console.log("i: ", i);
}

function btnClick2() {
  let x;
  if (j < 59) {
    x = document.getElementById("mytable").getElementsByTagName("td");
    x[j].innerHTML = '<img height="80px" src="image/horse-shadow.jpg">';

    j = j + shagaiOrhih();

    if (j >= 59) {
      document.getElementById("p2").innerHTML = "ялагч боллоо";
      x[59].innerHTML = '<img height="80px" src="image/horse-2.jpg">';
      document.getElementById("btnClick1").disabled = true;
      document.getElementById("btnClick2").remove();
      document.getElementById("btnClick1").disabled = true;
      document.getElementById("player-2").style.color = "red";
    } else {
      x[j].innerHTML = '<img height="80px" src="image/horse-2.jpg">';

      document.getElementById("btnClick2").disabled = true;
      document.getElementById("btnClick1").disabled = false;
    }
  }
  console.log("j: ", j);
}
