let head=document.querySelectorAll("#proDetails .content .upper ul li");
function removeBorder(){
 for(let i=0;i<head.length;i++){
    if(head[i].classList.contains("active111")){
        head[i].classList.remove("active111")
    }
 }   
};
for(let i=0;i<head.length;i++){
    head[i].onclick=function(){
        removeBorder();
        head[i].classList.add("active111");
    }
}