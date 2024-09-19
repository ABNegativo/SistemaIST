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

// controle dos elementos. O primeiro é do cadastro de eventos
// document.getElementById('nav-cadastro_eventos').addEventListener('click', function(event) {
//     const liElement = event.target.parentElement;
//     toggleContent('cadastro_eventos.html', 'container-cadastro_eventos', liElement);
// });

// Cadastro de coletas de exames
document.getElementById('nav-cadastro_coletas').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('cadastro_coletas.html', 'container-cadastro_coletas', liElement);
});

// Eventos
// document.getElementById('nav-eventos').addEventListener('click', function(event) {
//     const liElement = event.target.parentElement;
//     toggleContent('eventos.html', 'container-eventos', liElement);
// });

// Questionarios
document.getElementById('nav-coletas').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('coletas.html', 'container-coletas', liElement);
});

// ---------------------------------------------------------------

// ------------------------navBarLateral--------------------------

// perfil (admin) Desktop
document.getElementById('nav-perfil_admin').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('perfilAdmin.html', 'container-perfil_admin', liElement);
});

// perfil (admin) Mobile

document.getElementById('nav-mobile-perfil_admin').addEventListener('click', function(event) {
    const liElement = event.target.parentElement;
    toggleContent('perfilAdmin.html', 'container-perfil_admin', liElement);
});

