const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

function toggle() {
    const signUp = document.getElementById('sign_up');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle1() {
    const signUp = document.getElementById('digi_illus_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle2() {
    const signUp = document.getElementById('char_design_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle3() {
    const signUp = document.getElementById('animation_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle4() {
    const signUp = document.getElementById('storyboards_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle5() {
    const signUp = document.getElementById('threeD_designs_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}