function EnviarMensagem (alvo) {
  let messagem = alvo.innerText;
  let numero = prompt("Qual é o número?");
  let link =`https://api.whatsapp.com/send?phone=55${numero}&text${messagem}`
  window.open(link);
};