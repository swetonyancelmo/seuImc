const enviarBtn = document.querySelector("#enviar");
const resp = document.querySelector("#resposta");

enviarBtn.addEventListener('click', () => {
  const pesoValue = document.querySelector("#peso").value;
  const alturaValue = document.querySelector("#altura").value;

  if(pesoValue.trim() === "" || alturaValue.trim() === ""){
    resp.innerHTML = "Por favor, preencha todos os campos.";
    resp.style.color = "red";
    return;
  }

  const peso = parseFloat(pesoValue);
  const altura = parseFloat(alturaValue);

  if(isNaN(peso) || isNaN(altura)) {
    resp.innerHTML = "Por favor, digite apenas números."
    resp.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);

  if(imc < 18.5) {
    resp.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, sua classificação é: Abaixo do Peso.`;
    resp.style.color = "black";
  } else if(imc >= 18.5 && imc < 24.9) {
    resp.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, sua classificação é: Peso Normal.`;
    resp.style.color = "black";
  } else if(imc > 24.9 && imc < 29.9) {
    resp.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, sua classificação é: Sobrepeso.`;
    resp.style.color = "black";
  } else {
    resp.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, sua classificação é: Obesidade.`;
    resp.style.color = "black";
  }

});