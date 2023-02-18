const loginBtn = document.querySelector('.login--btn');
const hiddenLogin = document.querySelector('.hidden-login');

loginBtn.addEventListener('click', () => {
    hiddenLogin.classList.toggle('show-login');
});

const findOutChoice = document.querySelector('.findOut-choice');
const hiddenFindOut = document.querySelector('.hidden-findOut');

findOutChoice.addEventListener('click', () => {
    hiddenFindOut.classList.toggle('show-findOut');
});