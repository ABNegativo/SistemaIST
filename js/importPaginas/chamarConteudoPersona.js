// Variável para rastrear o conteúdo atualmente visível
let currentContent = {
    containerId: null,
    liElement: null
};

function loadContent(page, containerId, liElement) {
    const container = document.getElementById(containerId);

    if (currentContent.containerId && currentContent.containerId !== containerId) {
        const previousContainer = document.getElementById(currentContent.containerId);
        previousContainer.innerHTML = '';
        currentContent.liElement.classList.remove('active');
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            container.innerHTML = xhr.responseText;
            currentContent = {
                containerId: containerId,
                liElement: liElement
            };
            liElement.classList.add('active');
        } else {
            alert ("Erro de conexão. Tente recarregar o site, caso o problema persista, contate os administradores.");
        }
    };

    xhr.onerror = function () {
        alert ("Erro de conexão. Tente recarregar o site, caso o problema persista, contate os administradores.");
    };

    xhr.send();
}

// Função para alternar o conteúdo e a classe "active"
function toggleContent(page, containerId, liElement) {
    const container = document.getElementById(containerId);

    if (currentContent.containerId === containerId) {

        container.innerHTML = '';
        liElement.classList.remove('active');
        currentContent = {
            containerId: null,
            liElement: null
        };
    } else {
        loadContent(page, containerId, liElement);
    }
}

// ------------------------navBarSuperior--------------------------

// Visualizador de resultados dos exames

document.getElementById('nav-visualizar_resultados').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('visualizar_resultados.html', 'container-visualizar_resultados', liElement);
});


// ---------------------------------------------------------------

// ------------------------navBarLateral--------------------------

// perfil (admin) Desktop
document.getElementById('nav-perfil_persona').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('perfilPersona.html', 'container-perfil_persona', liElement);
});

// perfil (admin) Mobile

document.getElementById('nav-mobile-perfil_persona').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('perfilPersona.html', 'container-perfil_persona', liElement);
});

