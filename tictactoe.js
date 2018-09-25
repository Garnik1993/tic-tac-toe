const deadPool = new Array(9);

function comp() {
  const id = Math.floor(Math.random() * 9);
  deadPool[id] ? comp() : move(id, 'comp');
}

function checkEnd() {
  if (deadPool[0]=='comp' && deadPool[1]=='comp' && deadPool[2]=='comp' || deadPool[0]=='player' && deadPool[1]=='player' && deadPool[2]=='player')  return true;
  if (deadPool[3]=='comp' && deadPool[4]=='comp' && deadPool[5]=='comp' || deadPool[3]=='player' && deadPool[4]=='player' && deadPool[5]=='player')  return true;
  if (deadPool[6]=='comp' && deadPool[7]=='comp' && deadPool[8]=='comp' || deadPool[6]=='player' && deadPool[7]=='player' && deadPool[8]=='player')  return true;
  if (deadPool[0]=='comp' && deadPool[3]=='comp' && deadPool[6]=='comp' || deadPool[0]=='player' && deadPool[3]=='player' && deadPool[6]=='player')  return true;
  if (deadPool[1]=='comp' && deadPool[4]=='comp' && deadPool[7]=='comp' || deadPool[1]=='player' && deadPool[4]=='player' && deadPool[7]=='player')  return true;
  if (deadPool[2]=='comp' && deadPool[5]=='comp' && deadPool[8]=='comp' || deadPool[2]=='player' && deadPool[5]=='player' && deadPool[8]=='player')  return true;
  if (deadPool[0]=='comp' && deadPool[4]=='comp' && deadPool[8]=='comp' || deadPool[0]=='player' && deadPool[4]=='player' && deadPool[8]=='player')  return true;
  if (deadPool[2]=='comp' && deadPool[4]=='comp' && deadPool[6]=='comp' || deadPool[2]=='player' && deadPool[4]=='player' && deadPool[6]=='player')  return true;
  if(deadPool[0] && deadPool[1] && deadPool[2] && deadPool[3] && deadPool[4] && deadPool[5] && deadPool[6] && deadPool[7] && deadPool[8]) return true;
}

function move(id, role) {
  if(deadPool[id]) return false;
  deadPool[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  !checkEnd() ? (role == 'player') ? comp() : null : reset()
}

function reset() {
  alert("Խաղը ավարտված է!");
  location.reload();
}

var r = confirm("Ցանկանում եք խաղը դուք սկսեք?");
if (!r) {
    comp();
}