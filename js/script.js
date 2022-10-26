form = document.forms[0];
form.onsubmit = (el) => {
  el.preventDefault();
  var row = document
    .getElementById("myTable")
    .insertRow(document.getElementById("myTable").rows.length);
  var num = row.insertCell(0);
  var title = row.insertCell(1);
  var desc = row.insertCell(2);
  var done = row.insertCell(3);
  var rem = row.insertCell(4);
  for (let i = 0; i < document.getElementById("myTable").rows.length; i++) {
    num.innerHTML = i;
    row.className = `task-${i}`;
  }
  title.innerHTML = form[0].value;
  desc.innerHTML = form[1].value;
  done.innerHTML =
    '<button onclick="done(this)" class="btn btn-success" type="button"><i class="fa-solid fa-check"></i></button>';
  rem.innerHTML =
    '<button onclick="funcRem(this)" class="btn btn-danger" type="button"><i class="fa-solid fa-trash"></i></button>';
  form[0].value = "";
  form[1].value = "";
};

let done = (e) => {
  var i = e.parentNode.parentNode.rowIndex;
  let taskDone = document.getElementsByClassName(`task-${i}`);
  taskDone[0].className = "text-decoration-line-through fw-bold opacity-50";
};

let funcRem = (e) => {
  var i = e.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
};
