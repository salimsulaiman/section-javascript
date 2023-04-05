let btnSend = document.getElementById("btnSend");

// set atribut
if (btnSend) {
  btnSend.setAttribute("name", "send");
  btnSend.setAttribute("disabled", "");
}

console.log(btnSend);

// get atribut

console.log(btnSend.getAttribute("name"));
