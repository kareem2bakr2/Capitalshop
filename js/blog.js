let from;
let to;
function displayBlog(start,end){
from=start;
to=end;
console.log(from);
let blogs=document.getElementById('blogs');
let blogRequest = new XMLHttpRequest;
blogRequest.open('GET', 'https://picsum.photos/v2/list');
blogRequest.send();
let blogsdata=[];
blogRequest.onreadystatechange = function(){
if (blogRequest.readyState === 4, blogRequest.status === 200){
    blogsdata=JSON.parse(blogRequest.response);
    blogs.innerHTML=printData(blogsdata,start,end);
}
}
}
displayBlog(0,5);
let pagebtns=document.querySelectorAll('.nextPrevBtn button');
let prevblogs=document.getElementById("prev")
let nextblogs=document.getElementById("next")

    for(let i=0; i<pagebtns.length; i++){
        pagebtns[i].onclick=function(){
            displayBlog(i*5,5+(i*5));
            for(let j=0; j<pagebtns.length; j++){
             pagebtns[j].classList.remove("active3")
            }
            pagebtns[i].classList.add("active3");
        }
    }
    console.log(from);
prevblogs.onclick=function(){
    let index;
    if(to==5){
    displayBlog(0,5);
    }
    else{
    displayBlog(from-5,to-5);
    for(let j=0; j<pagebtns.length; j++){
        if(pagebtns[j].classList.contains("active3")){
            index=j;
        }
    }
    pagebtns[index].classList.remove("active3")
    pagebtns[index-1].classList.add("active3")
}
}
nextblogs.onclick=function(){
    let index;
    displayBlog(from+5,to+5);
    for(let j=0; j<pagebtns.length; j++){
        if(pagebtns[j].classList.contains("active3")){
            index=j;
        }
    }
    pagebtns[index].classList.remove("active3")
    if(index==pagebtns.length-1){
        pagebtns[index].classList.add("active3")
    }
    else{
            pagebtns[index+1].classList.add("active3")

    }
}
function printData(data,start,end){
    if(end >data.length){end=data.length;}
    let txt=``;
    for (let i=start; i<end;i++){
        txt+=`
        <div class="col-12 my-3 p-0">
            <div>
                 <div class="image">
                    <img src=" ${data[i].download_url} " class="img-fluid" alt=""> 
                    <div class="over"> <span>15</span> Jan</div>
                </div>
                <div class="content">
                <h5>${data[i].author}</h5>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <span class="user"><i class="fa-solid fa-user"></i> Travel, Lifestyle</span>
                <span class="comment"><i class="fa-solid fa-comment"></i> 03 Comments</span>   
                </div> 
            </div>
        </div>  
        `;
    }
    return txt;
}