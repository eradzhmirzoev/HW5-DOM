console.log('Задание номер: 5');

let inpText = document.querySelector('.inpText');
let inpPassword = document.querySelector('.inpPassword');
let outer = document.querySelector('.outer');

document.querySelector('.btn-login').onclick = (event) => {
    event.preventDefault();

    outer.innerHTML = inpText.value + inpPassword.value;

    localStorage.setItem(inpText.value, inpPassword.value);

}
