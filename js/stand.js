let navbar=document.getElementById("nav2");
let goTop=document.getElementById("goTop");
let menuDiv=document.querySelector("header #nav2 .parent .child");
let menu=document.getElementById("menu");
let pages=document.querySelectorAll("header #nav2 .parent .child .child2");
let clickPages=document.getElementById("clickPages");
let blog=document.getElementById("blog");
window.onscroll=function(){
    if(document.body.scrollTop > 700){
    navbar.classList.add("navclass");
    goTop.style.opacity="1";
    }
    else if(document.body.scrollTop < 700){
    navbar.classList.remove("navclass");
    goTop.style.opacity="0";
    }

    }
goTop.onclick=function(){
    window.scrollTo(0,0)
}
clickPages.onclick = function(){
    if(pages[0].style.display =="block"){
            pages[0].style.display ="none";
        }
    else {
        pages[0].style.display ="block";
        }
    }
    blog.onclick = function(){
        if(pages[1].style.display =="block"){
            pages[1].style.display ="none";
        }
    else {
        pages[1].style.display ="block";
        }
    }
    menu.onclick = function(){
        if(menuDiv.style.display =="block"){
            menuDiv.style.display ="none";
        }
    else {
        menuDiv.style.display ="block";
        }
    }

