let goLeftBanner=document.getElementById("goLeftBanner");
let goRightBanner=document.getElementById("goRightBanner");
let bannerPhoto=document.querySelector("header .banner img");
let onBanner=document.querySelector(".onBanner");
// let RemoveAdd=document.getElementById("RemoveAdd");
let listItem=document.querySelectorAll("#TrendingThisWeek .up .container .right ul li");
let scrollbtnright=document.getElementById("scrollbtnright");
let scrollbtnleft=document.getElementById("scrollbtnleft");
let translateGallary=document.querySelector("#TrendingThisWeek .down .d-flex")
let translateGallary2=document.querySelector("#youMayLike .down .d-flex")
let gallery=document.getElementById("gall");
let gallery2=document.getElementById("gall2");
let scrollbtnright2=document.getElementById("scrollbtnright2");
let scrollbtnleft2=document.getElementById("scrollbtnleft2");
let animationloop=document.querySelectorAll("#last .row >div");
window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 270 || document.body.scrollTop > 270) {
        console.log("Scrolled past 270px");
    }
    if (document.documentElement.scrollTop > 2700 || document.body.scrollTop > 2700) {
        console.log("Scrolled past 2700px");
        
        for (var i = 0; i < animationloop.length; i++) {
            animationloop[i].style.cssText = `
                animation-name: down_up;
                animation-duration: 1s;
                animation-delay: ${0.25 * i}s;
            `;
        }
    }
});



function printdata(dataArr,goPrint){
    var gall1=``;
    for(let i=0;i<dataArr.length;i++){
        gall1+=`
        <div class="col-lg-3 col-md-4 col-sm-6 col-xsm-12">
            <div class="px-3"> 
                    <div class="hideoverflow">
                        <img src="${dataArr[i].url}" alt="">
                    </div>
                <div>
                    <ul class="onpoto">
                        <li><i class="fa-solid fa-cart-shopping fa-2x"></i></li>
                        <li><i class="fa-regular fa-heart fa-2x"></i></li>
                        <li><i class="fa-solid fa-magnifying-glass-plus fa-2x"></i></li>
                    </ul>
                </div>
                <div class="labels">
                    <h5>${dataArr[i].title}</h5>
                    <span class="span1">$98.00</span>
                    <span class="span2">$120.00</span>
                </div>
            </div>
        </div>
        `
    }
    goPrint.innerHTML=gall1;
}
let httprequest=new XMLHttpRequest;
let data=[];
let Mendata;
httprequest.open("GET","https://jsonplaceholder.typicode.com/photos");
httprequest.send();
httprequest.onreadystatechange = function(){
    if(httprequest.readyState==4 && httprequest.status==200){
        data=JSON.parse(httprequest.response)
        Mendata=data.slice(0,10)
    printdata(Mendata,gallery);

    }
}
var gall2=new XMLHttpRequest ;
let data2=[];
gall2.open('GET','https://jsonplaceholder.typicode.com/photos');
gall2.send();
let youLikes;
gall2.onreadystatechange = function(){
if(gall2.status == 200 && gall2.readyState ==4){
    data2=JSON.parse(gall2.response);
    youLikes=data2.slice(0,10);
    printdata(youLikes,gallery2);
}
}

function changePhoto(){
    
    if (bannerPhoto.src=="file:///D:/U/Frontend/Projects/04-Capitalshop/Images/asset%2042.jpeg"){
        bannerPhoto.src="Images/asset 43.jpeg";
        bannerPhoto.style.cssText=`object-position: 40% 100%;`;

        onBanner.classList.remove("left5");

        onBanner.classList.add("right5");
        // onBanner.classList.add("addAnimation");
    }
    else{
        bannerPhoto.src="Images/asset 42.jpeg";
        onBanner.classList.remove("right5");
        bannerPhoto.style.cssText=`object-position: 55% 100%;`;


        onBanner.classList.add("left5");

        // onBanner.classList.add("addAnimation");
    }

}
goRightBanner.onclick=function(){changePhoto();}
goLeftBanner.onclick=function(){changePhoto();}
window.setInterval(function(){changePhoto();},10000);
function removeBorder(){
    for(var j=0;j<listItem.length;j++){
        if(listItem[j].classList.contains("active")){
            listItem[j].classList.remove("active")
        }
    }
}
for(let i=0;i<listItem.length;i++) {
    listItem[i].onclick=function(){
        removeBorder();
        listItem[i].classList.add("active");
    }
}
let scale=0;
let maxScale;
scrollbtnleft.onclick=function(){
    scale-=330;
    maxScale=-(Mendata.length-4)*330;
    if (scale<maxScale){
        scale=maxScale;
    }
    translateGallary.style.transform=
    `translateX(${scale}px)`
    ;
}
scrollbtnright.onclick=function(){
    scale+=330;
    if(scale>0){
        scale=0;
    }
    translateGallary.style.transform=
    `translateX(${scale}px)`
    ;
}
scrollbtnleft2.onclick=function(){
    scale-=330;
    maxScale=-(youLikes.length-4)*330;
    if (scale<maxScale){
        scale=maxScale;
    }
    translateGallary2.style.transform=
    `translateX(${scale}px)`
    ;
}
scrollbtnright2.onclick=function(){
    scale+=330;
    if(scale>0){
        scale=0;
    }
    translateGallary2.style.transform=
    `translateX(${scale}px)`
    ;
} 
