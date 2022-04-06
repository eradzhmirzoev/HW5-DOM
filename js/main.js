console.log('Задание номер: 5');

let inpText = document.querySelector('.inpText');
let inpPassword = document.querySelector('.inpPassword');
let outer = document.querySelector('.outer');

document.querySelector('.btn-login').addEventListener('click', ()=> {
    event.preventDefault();
    
    outer.innerHTML ='name ' + inpText.value + ' ' + 'password ' + inpPassword.value;

    localStorage.setItem('user', JSON.stringify({name: inpText.value, password: inpPassword.value}));
});