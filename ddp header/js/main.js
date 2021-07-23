const btn = document.querySelector('.toogleBtn');
const sign = document.querySelector('.header__sign');

btn.addEventListener('click',function(){
  sign.classList.toggle('active');
});