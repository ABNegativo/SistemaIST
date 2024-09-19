// Função para adicionar a máscara de CPF
function aplicarMascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.substring(0, 11); 
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
    return cpf;
  }
  
  function aplicarMascaraData(data) {
    data = data.replace(/\D/g, ""); 
    data = data.substring(0, 8); 
    data = data.replace(/(\d{2})(\d)/, "$1/$2");
    data = data.replace(/(\d{2})(\d)/, "$1/$2"); 
    return data;
  }
  
  // Função para aplicar as máscaras nos inputs
  function aplicarMascarasNosInputs() {
    const cpfInput = document.getElementById('cpf');
    const dataNascimentoInput = document.getElementById('dataNascimento');
    const dataColetaInput = document.getElementById('dataColeta');
  
    if (cpfInput) {
      cpfInput.maxLength = 14;
      cpfInput.addEventListener('input', function (e) {
        e.target.value = aplicarMascaraCPF(e.target.value);
      });
    }
  
    if (dataNascimentoInput) {
      dataNascimentoInput.maxLength = 10; 
      dataNascimentoInput.addEventListener('input', function (e) {
        e.target.value = aplicarMascaraData(e.target.value);
      });
    }
  
    if (dataColetaInput) {
      dataColetaInput.maxLength = 10;
      dataColetaInput.addEventListener('input', function (e) {
        e.target.value = aplicarMascaraData(e.target.value);
      });
    }
  }
  
  // Função para observar mudanças no DOM
  function observarMudancasNoDOM() {

    const alvo = document.body;
  
    // Cria uma instância de MutationObserver
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {

        if (mutation.addedNodes.length) {
          // Tenta aplicar as máscaras nos inputs sempre que algo for adicionado
          aplicarMascarasNosInputs();
        }
      });
    });
  
    // Configura o observer para observar mudanças
    observer.observe(alvo, { childList: true, subtree: true });
  }
  
  // Chama a função
  observarMudancasNoDOM();
  