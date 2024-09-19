document.addEventListener('DOMContentLoaded', function () {
    function togglePasswordVisibility(inputId, spanId) {
      const passwordInput = document.getElementById(inputId);
      const toggleIcon = document.getElementById(spanId);
  
      if (passwordInput && toggleIcon) {
        toggleIcon.addEventListener('click', function () {

          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
  
          toggleIcon.classList.toggle('fa-eye');
          toggleIcon.classList.toggle('fa-eye-slash');
        });
      }
    }
  
    function aplicarFuncaoToggleSenha() {
      togglePasswordVisibility('atual_senha', 'toggle_atual_senha');
      togglePasswordVisibility('nova_senha', 'toggle_nova_senha');
    }

    function observarMudancasNoDOM() {
      const alvo = document.body;
  
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.addedNodes.length) {
            aplicarFuncaoToggleSenha();
          }
        });
      });
  
      observer.observe(alvo, { childList: true, subtree: true });
    }
  
    observarMudancasNoDOM();
  });
  