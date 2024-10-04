let checkTerms=document.getElementById('checkTerms');
let checkI=document.getElementById('check');
let checkchange=document.getElementById('checkchange');
// checkTerms.checked=true;
function changeCheck(){
    if(checkTerms.checked){
        checkTerms.checked=false;
    }
    else{
        checkTerms.checked=true;
    }
}
checkI.onclick=function(){
    changeCheck();
    checkchange.classList.toggle("true");
    // console.log(checkTerms.checked);
}