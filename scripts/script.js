gsap.to(".loader-block", .5,{
    delay:.2,
    height:0,
    stagger:{
        amount:0.5
    },
    ease:"power4,inOut",
});

const x = document.querySelector(".close-menu-btn")
    const bar = document.querySelector(".loader-block")
    const menulinks = document.querySelector(".menu-lnks")
  function openMenu(){
     gsap.to(".loader-block", .5,{
    delay:.2,
    height:"100vh",
    stagger:{
        amount:0.5
    },
    ease:"power4,inOut",
});

gsap.to(menulinks,{
    display:"flex",
    delay:.5,
    ease:"power4,inOut",
})

gsap.to(".menu-lnks .menu-text",{
    stagger:{
        amount:0.3
    },
    delay: .7,
    opacity:1,
    ease:"power4,inOut",
  })

gsap.to(x,{
    display:"block",
    scale:1,
    opacity:1,
    delay:1,
    ease:"power4,inOut",
    rotation:90, 
    transformOrigin:"left 50%",
})

gsap.to(".main-wrapper",{
    display:"none",
    delay:1,
})

}

  function closeMenu(){
    gsap.to(".loader-block", 1,{
   delay:.2,
   height:"0",
   stagger:{
       amount:0.5
   },
   ease:"power4,inOut",
});

gsap.to(".main-wrapper",{
    display:"block",
})

gsap.to(menulinks,{
    display:"none",
    delay:.1,
    ease:"power4,inOut",
})

gsap.to(".menu-lnks .menu-text",{
    stagger:{
        amount:-0.5
    },
    delay: 0,
    opacity:0,
    ease:"power4",
  })
  
gsap.to(x,{
    rotation:-90, 
    transformOrigin:"left 50%",
   display:"none",
   scale:0,
   opacity:0,
   ease:"power4,inOut",
})

 };


 gsap.from(".horizontal-line, .h-line",{
    width:"0%",
    scrollTrigger:{
        trigger:".home-about-feture",
        start:"top 60%",
        end:"bottom bottom",
        // scrub:5,
        stagger: .5,
        ease:"power4,inOut",
    }
 })

//  gsap.from(".h-line",{
//     width:"0%",
//     scrollTrigger:{
//         trigger:".home-about-feture",
//         start:"top 60%",
//         end:"bottom bottom",
//         // scrub:5,
//         stagger: .5,
//         ease:"power4,inOut",
//     }
//  })

//  gsap.from(".vertical-line",{
//     height:"0%",
//     scrollTrigger:{
//         // scroller:".main-wrapper",
//         trigger:".home-about-feture",
//         start:"top 60%",
//         end:"bottom bottom",
//         stagger: 5,
//     }
//  });



 ScrollTrigger.create({
  trigger:".about-hero",
  start:"top top",
    end:"bottom bottom",
    pin:".about-hero .img-content",
 });


 var revealContainers = document.querySelectorAll(".img-content");
  revealContainers.forEach((imgcontainer, i) => {
  var image = imgcontainer.querySelector(".img-content img");
  
  var tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: imgcontainer,
      start:"top 50%",
      ease: "power4.inOut",
      scrub:true,
    }
  });

  tl9.to(image,{
   scale:1,
  });
});