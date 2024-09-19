document.getElementById('sidebarCollapse').addEventListener('click', function() {
    var divElement = document.getElementById('container-icon_sadBar');
    
    if (divElement.style.display === 'none') {
        divElement.style.display = 'block';  // Mostra o elemento
    } else {
        divElement.style.display = 'none';   // Esconde o elemento
    }
});
