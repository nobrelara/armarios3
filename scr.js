function lerDados() {
  return fetch('./data.json')
    .then(response => response.json())
    .catch(error => {
      console.error('Erro ao ler JSON:', error);
    });
}

function clicar(n) {
  const botao1 = document.getElementById("botao1");
  const botao2 = document.getElementById("botao2");
  const botao3 = document.getElementById("botao3");

  if (n === '1') {
    alterarStatus(botao1);
  }
  if (n === '2') {
    alterarStatus(botao2);
  }
  if (n === '3') {
    alterarStatus(botao3);
  }

}

function alterarStatus(botao) {
  if (botao.className === "sLivre") {
    botao.className = "sOcupado";
  }
  else if (botao.className === "sOcupado") {
    botao.className = "sManutencao";
  }
  else {
    botao.className = "sLivre";
  }
}

function atribuirStatus(botao, statusJson) {
  if (statusJson === "livre") {
    botao.setAttribute("class", "sLivre");
  }
  else if (statusJson === "ocupado") {
    botao.setAttribute("class", "sOcupado");
  }
  else if (statusJson === "manutencao") {
    botao.setAttribute("class", "sManutencao");
  }
}

function carregarStatus() {
  const botao1 = document.getElementById("botao1");
  const botao2 = document.getElementById("botao2");
  const botao3 = document.getElementById("botao3");

  lerDados()
    .then(data => {
      listaArmarios = data.armarios;
      listaArmarios.forEach(armario => {
        if (armario.id === 1) {
          atribuirStatus(botao1, armario.status);
        }
        else if (armario.id === 2) {
          atribuirStatus(botao2, armario.status);
        }
        else if (armario.id === 3) {
          atribuirStatus(botao3, armario.status);
        }

      });
    }
    )
}

carregarStatus();