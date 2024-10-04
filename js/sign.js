let showSignUp=document.getElementById('showSignUp');
let login=document.getElementsByClassName('login');
let signUp=document.getElementsByClassName('signUp')
let showLogIn=document.getElementById('showLogIn')
showSignUp.onclick=function(){
login[0].classList.add('d-none');
signUp[0].classList.remove('d-none');
}
showLogIn.onclick=function(){
    login[0].classList.remove('d-none');
    signUp[0].classList.add('d-none');
}