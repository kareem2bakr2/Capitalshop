let prevblog=document.getElementById("prevblog");
let nextblog=document.getElementById("nextblog");
let prevImg=document.getElementById("prevImg");
let nextImg=document.getElementById("nextImg");
let allblogs = new XMLHttpRequest();
allblogs.open('GET', 'https://picsum.photos/v2/list');
allblogs.send();
let blogsARR =[]; 
allblogs.onreadystatechange = function(){
    if (allblogs.readyState==4 && allblogs.status==200){
        blogsARR=JSON.parse(allblogs.response);
        let index= printBlogDetail(blogsARR[0]); 
        prevblog.style.opacity=0;
        nextImg.src=blogsARR[1].download_url;
        let next;
        letprev;
        nextblog.onclick = function(){
            index++;
            next=index+1;
            prev=index-1;
            nextImg.src=blogsARR[next].download_url;
            prevImg.src=blogsARR[prev].download_url;
            if (index==blogsARR.length-1){
                nextblog.style.opacity=0;
               }
            printBlogDetail(blogsARR[index]);
            prevblog.style.opacity=1;
        };
        prevblog.onclick = function(){
            index--;
            next=index+1;
            prev=index-1;
            nextImg.src=blogsARR[next].download_url;
            prevImg.src=blogsARR[prev].download_url;
            nextblog.style.opacity=1;
            if (index==0){
                prevblog.style.opacity=0;
                
            }
            printBlogDetail(blogsARR[index]);
        };
    }
}
let comments = new XMLHttpRequest();
comments.open('GET', 'https://jsonplaceholder.typicode.com/comments');
comments.send();
let commentARR =[]; 
comments.onreadystatechange = function(){
    if (comments.readyState==4 && comments.status==200){
        commentARR=JSON.parse(comments.response);
        let onscreencoment=comment(0);
        let index= printcomment(onscreencoment);
        index--;
        nextblog.onclick = function(){
            index++;
            printcomment(comment(index));
           console.log("hello")
        };
        prevblog.onclick = function(){
            index--;
            printcomment(comment(index));
        };
    }
}
function comment(i){
    i++;
    let comments=[];
    for(let y=0; y<commentARR.length; y++){
        let comment={id:commentARR[y].postId,name:commentARR[y].name, body:commentARR[y].body};
       if(commentARR[y].postId==i){ comments.push(comment);}
    }
    console.log(comments);
    return comments;
}
let imgPDetail=document.getElementById("img&pDetail");
function printBlogDetail(blog){
id=blog.id;

let toprint=`
<img src="${blog.download_url}" alt="">
<h5>Second divided from form fish beast made every of seas all gathered us saying he our</h5>
<span class="user"><i class="fa-solid fa-user"></i> Travel, Lifestyle</span>
<span class="comment"><i class="fa-solid fa-comment"></i> 03 Comments</span> 
<p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
<p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
<div class="backgroundedP"><p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p></div>
<p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
<p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
`;
imgPDetail.innerHTML=toprint;
return id;
}
let Commentshtml=document.getElementById("Comments");
function printcomment(arr){
let txt=``;
for (let i=0; i<arr.length; i++){
    txt+=`
                                            <div class="col-12">
                                            <div class="row">
                                                <div class="col-lg-2">
                                                    <img src="../Images/assets/asset 7.png" alt="">
                                                </div>
                                                <div class="col-10">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <p>${arr[i].body}</p>
                                                        </div>
                                                        <div class="col-md-6 left">
                                                            <a href="#">${arr[i].name}
                                                            </a>
                                                            <span>December 4, 2017 at 3:12 pm</span>
                                                        </div>
                                                        <div class=" col-md-6 right">
                                                            <a href="#">REPLY</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    `
}
Commentshtml.innerHTML = txt;
return arr[0].id;
}

