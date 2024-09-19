const sim = document.querySelector("#option-yes");
const nao = document.querySelector("#option-no");
const fundo = document.querySelector("#area");
const resp = document.querySelector("#textinho");

nao.addEventListener("mouseenter", entrar);
let estado = -1;

function entrar() {
  estado++;
  switch (estado) {
    case 0:
      sim.style.transform = "translate(95px)";
      nao.style.transform = "translate(130px, -150px)";
      break;
    case 1:
      nao.style.transform = "translate(130px, 150px)";
      break;
    case 2:
      nao.style.transform = "translate(-325px, 150px)";
      break;
    case 3:
      nao.style.transform = "translate(-325px, -150px)";
      break;
    case 4:
      nao.style.transform = "translate(135px, 150px)";
      break;
    case 5:
      nao.style.transform = "translate(135px, -150px)";
      break;
    case 6:
      nao.style.transform = "translate(-325px, 150px)";
      break;
    case 7:
      nao.style.transform = "translate(-325px, -150px)";
      estado = -1;
      break;
  }
}

sim.addEventListener("click", clicar);

function clicar() {
  resp.innerHTML = "Você caiu no golpe do colonizador";
  
  sim.style.transform = "translate(0px)";
  nao.style.transform = "translate(0px, 0px)";

  resp.style.opacity = 1;

  setTimeout(function () {
    resp.style.opacity = 0;
  }, 3000);
}
