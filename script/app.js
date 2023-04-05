var btn = document.getElementsByClassName("indicator");
var slide = document.getElementById("slide");
var scrolling = document.querySelector(".back-top");
var ham = document.querySelector(".hamburger");
var navigation = document.querySelector(".myLinks");
var count = 0;
var bgNav = document.querySelector(".bg-nav");
var burgir = document.querySelector(".cheese-burger");

var commentOne = document.querySelector(".com1");
var commentTwo = document.querySelector(".com2");
var next = document.querySelector(".next");
var previous = document.querySelector(".prev");

next.addEventListener("click", function(){
  commentOne.style.opacity = "0";
  commentOne.style.visability = "hidden";
  commentOne.style.transition = ".3s ease-out";
  commentTwo.style.opacity = "1";
  commentTwo.style.visability = "visible";
})

previous.addEventListener("click", function(){
  commentTwo.style.opacity = "0";
  commentTwo.style.visability = "hidden";
  commentTwo.style.transition = ".3s ease-out";
  commentOne.style.opacity = "1";
  commentOne.style.visability = "visible";
})

window.addEventListener("scroll", function(){
  if(window.scrollY > 500){
  scrolling.classList.add("active");
  } else if(window.scrollY < 500){
    scrolling.classList.remove("active");
  }
})

btn[0].onclick = function(){
  slide.style.transform = "translateX(0px)";
}
btn[1].onclick = function(){
  slide.style.transform = "translateX(-350px)";
}

function countClicks(){
    count = count + 1;
}

ham.addEventListener("click", function(){
    if(count % 2 !== 0){
        navigation.classList.add("nav-active");
        bgNav.classList.add("nav-active");
        burgir.classList.add("fa-solid" , "fa-xmark", "fa-xl")
        burgir.classList.remove("fa","fa-bars", "fa-xl")
    } else{
        navigation.classList.remove("nav-active");
        bgNav.classList.remove("nav-active");
        burgir.classList.remove("fa-solid" , "fa-xmark" )
        burgir.classList.add("fa","fa-bars")
    }
})
