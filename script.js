const menu = document.querySelector('.menu');
const showcase = document.querySelector('.showcase');
const links = document.querySelector('.links');

menu.addEventListener('click', () => {
    showcase.classList.toggle('active');
    menu.classList.toggle('active');
    setTimeout(function() {
        links.classList.toggle('active');
    }, 100);
})