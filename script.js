let navDiv = document.querySelector(".nav-part2 div");
let navpart2 = document.querySelector(".nav-part2");
let plusBtn = document.querySelector(".icon");


let count = 0;


plusBtn.addEventListener("click", ()=>{
    if(count === 0){
        navDiv.style.display = "none";
        plusBtn.style.transform = "rotate(135deg)";
        plusBtn.style.transition = "all ease .5s";
        // navDiv.style.transition = "all ease 1s";
        // navDiv.classList.add("transition");
        count = 1;
    }
    else{
        navDiv.style.display = "flex";
        plusBtn.style.transform = "rotate(0deg)"
        // navDiv.style.transition = "all ease 1s"
        // navDiv.classList.add("transition");
        count = 0;
    }

// navDiv.style.transform = "scaleY(0)";
})


function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });


    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector(".page2");
    
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgImg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgImg})`;
        })
    })
    
    
    document.querySelector(".footer-top img").addEventListener("click", ()=>{
        scroll.scrollTo(0);
    })

    document.querySelector(".page1 img").addEventListener("click", ()=>{
        scroll.scrollTo(731);
    })

    document.querySelector(".page2 img").addEventListener("click", ()=>{
        scroll.scrollTo(1462);
    })
}

loco();

function loading() {
    var tl = gsap.timeline();

    tl.to(".yellow-div1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })

    tl.from(".yellow-div2", {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")

    tl.to(".loader h1", {
        delay: 0.6,
        color: "black",
        duration: 0.7
    }, "anim")

    tl.to(".loader", {
        opacity: 0
    })
}

loading();

function randomHeightValue(){
   // Define the min and max heights
const minHeight = 20; // Minimum height in vw
const maxHeight = 32; // Maximum height in vw

// Select all divs with the class randomHeightImgDiv
const divs = document.querySelectorAll('.randomHeightImgDiv');

// Iterate over each div and assign a random height
divs.forEach(div => {
  // Generate a random height value between min-height and max-height
  const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  // Set the height of the current div
  div.style.minHeight = `${randomHeight}vw`;
});


}


randomHeightValue();