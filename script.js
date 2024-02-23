const likeBtn = document.getElementById("likeBtn");
const dislike = document.getElementById("dislikeBtn");


const initLikes = 34;
const initDislikes = 6;

let likesCount = initLikes;
let dislikeCount = initDislikes;

likeBtn.innerText = "👍"+ initLikes;
dislike.innerText = "👎"+ initDislikes;

function handlelike(){
likesCount++;
likeBtn.innerText = "👍" + likesCount;
disableBtn();
setCookie();
}
function handleDislike(){
dislikeCount++;
dislike.innerText = "👎"+ dislikeCount;
disableBtn();
setCookie();

}

function disableBtn(){
    likeBtn.disabled = true;
    dislike.disabled = true;

}
function disableBtn(){
    likeBtn.disabled = true;
    dislike.disabled = true;

}

function setCookie(){
    document.cookie = "voted=true; SameSite=Strict Max-Age=60"
}

window.onload = function(){
    if(document.cookie.indexOf("voted")> -1){
        disableBtn();
    }
}