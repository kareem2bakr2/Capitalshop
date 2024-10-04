let option=document.querySelectorAll("#category .row .left input");
let select=document.querySelectorAll("#category .row .left i");
let price=option[0].value;
let printRane=document.getElementById('getRange');
option[0].onchange = function(){
printRane.innerHTML=price;
}
for (let i=1; i<option.length; i++) {
    option[i].onclick=()=>{
    select[i-1].classList.toggle("selected");
    select[i-1].classList.toggle("fa-solid");
    select[i-1].classList.toggle("fa-check");
    };
}