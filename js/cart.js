let quantity= document.querySelectorAll('#cart table tbody .quantitiy');;
let printquantity= document.querySelectorAll('#cart table tbody span');
let onePPrice=document.querySelectorAll('#cart table tbody .onePPrice');
let totalPrice=document.querySelectorAll('#cart table tbody .totalPrice');
let promoInput =document.querySelector('#cart table tbody .promoInput');
let applyBtn=document.getElementById("applyBtn");
let ptintFinalTotal=document.getElementById("ptintFinalTotal");
let ifsuccess=document.getElementById("ifsuccess");
for (let i=0; i<quantity.length; i++){
    quantity[i].onchange=function(){  
        printTotalPrice(i);
        printFinalPrice();
    }
}
function printTotalPrice(i){
    printquantity[i].innerHTML=quantity[i].value;
    let p=onePPrice[i].innerHTML;
    let priceOne=Number(p.slice(1,p.length));
    let priceTOtal=priceOne*quantity[i].value;
    totalPrice[i].innerHTML=`
    $${priceTOtal}`;
}
function printFinalPrice(){
    let p;
    let priceOne;
    let finalTotal=0;
    for (let j=0; j<quantity.length; j++){
        p=onePPrice[j].innerHTML;
        priceOne=Number(p.slice(1,p.length));
        let priceTOtal=priceOne*quantity[j].value;
        finalTotal+=priceTOtal;

    }
    ptintFinalTotal.innerHTML=`$${finalTotal}`;

}
document.getElementById("updateBtn").onclick=function(){
   location.reload();
}
 //try promo codes
let promocodes=[
    {code:"kareem",discount:200}
    ,{code:"h4b5",discount:20}
    ,{code:"l38f",discount:250}

]
applyBtn.onclick=function(){
for(let i=0; i<promocodes.length; i++){
    if(promoInput.value==promocodes[i].code){
        let ptintFinalTotalValue=Number(ptintFinalTotal.innerHTML.substring(1))-promocodes[i].discount;
        ptintFinalTotal.innerHTML=`$${ptintFinalTotalValue}`;
        ifsuccess.classList.toggle("d-none");
    }
}
}