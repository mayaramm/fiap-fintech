// pegando os elementos do html
const navMenu = document.querySelector('.nav-menu');
const sanduiche = document.querySelector('.sanduiche');

// criar uma função que alterna entre os elementos a aplicação da class active
function toggleMenu() {
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// função precisa ser chamada por alguém 
sanduiche.addEventListener('click', toggleMenu);

// fechar o menu quando clicamos no link
navMenu.addEventListener('click',(e) =>{
    if(e.target.classList.contains('item-menu')){
        toggleMenu();
    }
});