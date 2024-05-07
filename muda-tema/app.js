'use strict'
/** 

* O modo estrito ajuda a capturar erros comuns de codificação e impede


*/

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
document.body.classList.toggle('dark-theme')

var className = document.body.className;
if(className == "light-theme") {
this.textContent= "Escuro";



}

else{
this.textContent="Claro";
}

})