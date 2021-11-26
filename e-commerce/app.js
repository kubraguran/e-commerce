let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let counter = document.querySelector("#counter");


let count = 0;


increase.addEventListener("click", clickEvent);
decrease.addEventListener("click", clickEvent);



function clickEvent () {
    if(this.id == "increase"){
        counter.innerHTML = count += 1
    }else{
        if(this.id == "decrease" && count > 0){
            counter.innerHTML = count -= 1;
        }
    }
}






let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");

for(let i = 0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener("mouseover", function (){
        if(activeImages.length > 0){
            activeImages[0].classList.remove("active");
        }
        this.classList.add("active")
        document.getElementById("featured").src = this.src
    })
}