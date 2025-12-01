// Seleciona o ícone do menu hambúrguer
let menuIcon = document.querySelector('.menu-icon');
// Seleciona a lista de links as 'ul'
let navbar = document.querySelector('.categorias-site');

// Quando clicar no ícone
menuIcon.onclick = () => {
// adiciona ou remove a classe 'active' na lista
    navbar.classList.toggle('active');
};

// Fechar o menu ao clicar em um link
window.onscroll = () => {
    navbar.classList.remove('active');
}