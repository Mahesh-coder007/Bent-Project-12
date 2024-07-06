gsap.to(".loader-block", .5,{
    delay:.2,
    height:0,
    stagger:{
        amount:0.5
    },
    ease:"power4,inOut",
});

let nav = document.querySelector(".menu-item-container");
let open = document.querySelector(".open-menu");
let close = document.querySelector(".close-menu");
let text = document.querySelector(".menu-item");

function openMenu(){
    gsap.to(".loader-block", .5,{
   delay:.2,
   height:"100vh",
   stagger:{
       amount:0.5
   },
   ease:"power4,inOut",
});

gsap.to(nav,{
    display:"flex",
    delay:.5,
   ease:"power4,inOut",
})

gsap.to(".menu-item-container .menu-item",{
    stagger:{
        amount:0.3
    },
    ease:"power4,inOut",
    opacity:1,
    delay: .7,
})

gsap.to(close,{
    display:"block",
    scale:1,
    opacity:1,
    delay:1,
    ease:"power4,inOut",
})

}

function closeMenu(){
    gsap.to(".loader-block", .5,{
   delay:.2,
   height:"0",
   stagger:{
       amount:0.5
   },
   ease:"power4,inOut",
});

gsap.to(nav,{
    display:"none",
    delay:.5,
   ease:"power4,inOut",
})

gsap.to(".menu-item-container .menu-item",{
    stagger:{
        amount:-0.3
    },
    ease:"power4,inOut",
    opacity:0,
})

gsap.to(close,{
    display:"none",
    scale:0,
    opacity:0,
    ease:"power4,inOut",
})

}


ScrollTrigger.create({
    trigger:".about-img",
    start:"top top",
      end:"bottom bottom",
      pin:".about-img .overly",
   });

 var revealContainers = document.querySelectorAll(".img-container-xl");
  revealContainers.forEach((imgcontainer, i) => {
    var image = imgcontainer.querySelector(".img-container-xl img");
    
    var tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: imgcontainer,
        start:"top 100%",
        ease: "power4.inOut",
        scrub:true,
      }
    });
  
    tl9.to(image,{
     scale:1.1,
    });
  });
