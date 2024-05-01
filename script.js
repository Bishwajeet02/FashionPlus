const bar= document.getElementById("bar");
const nav= document.getElementById("navbar");
if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}

const close= document.getElementById("close");

if(close){
    close.addEventListener("click", ()=>{

        nav.classList.remove("active")
    })
}

const slides= document.querySelectorAll(".slide");
let counter= 0;
slides.forEach(
    (slide,index) => {
slide.style.left=`${index*100}% `
    }
)
