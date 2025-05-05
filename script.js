let bot=document.querySelector("nav")
let bot2=document.querySelector(".nav-bottom")
const track = document.querySelector(".slider-track");
const images = gsap.utils.toArray(".slider-track img");
let cards=document.querySelectorAll(".card")
let img=document.querySelectorAll(".card img")
let vidclk=document.querySelector(".play")
let video=document.querySelector(".video")
let video2=document.querySelector(".video12")
let image2=document.querySelector(".image12")
let playbtn=document.querySelector(".group")
let imagep4=document.querySelector(".image14")
let videop4=document.querySelector(".video14")
let imagep42=document.querySelector(".image24")
let videop42=document.querySelector(".video24")
let page5=document.querySelectorAll(".divs")
let container=document.querySelector(".container")
let right=document.querySelectorAll(".right-content")
let btm=document.querySelectorAll(".btm-2 h4")
let btm2=document.querySelectorAll(".btm-3 h4")
let infonav=document.querySelector(".info-nav")
let h4=document.querySelectorAll(".info-nav h4")
let h5=document.querySelectorAll(".info-nav h5")
let ham=document.querySelector(".navhidden i")
let close=document.querySelector(".info-nav i")

// Duplicate the images for infinite scroll

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed"*/
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
       
}




function navbar(){
    bot.addEventListener("mouseenter",function(){
        tl.play()
    })
    let tl=gsap.timeline({
        paused:true
    })
    tl.to(".nav-bottom",{
        height:"20%",
        duration:0.4,
        
        ease:"power2.out"
    })
    tl.from(".nav-bottom .names h5",{
        opacity:0,
        y:"20px",
        duration:0.4,
        ease:"power2.in",
        stagger:{
            amount:0.4
        }
    })
    bot2.addEventListener("mouseleave",function(){
        
        tl.reverse()
        
    })
}

function movingimg(){
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
      });
      
      const totalWidth = track.scrollWidth / 2;
      
      gsap.to(track, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1
      });
}

function page1ani(){
    image2.addEventListener("click",function(){
        image2.style.opacity="0"
        video2.play()
        gsap.to(video2,{
            scale:"0.94",
            duration:0.3,
            ease:"power2.out"
        })
    })
    
    
    video2.addEventListener("click",function(){
        image2.style.opacity="1"
    
        image2.style.paddingLeft="0"
        image2.style.width=""
        video2.pause()
        gsap.to(video2,{
            scale:"0.0",
            duration:0.3,
            ease:"power2.in"
        })
        
    })
}

function page2(){


cards.forEach(function(elem){
    
   elem.addEventListener("mouseenter",function(){
    gsap.to(elem.childNodes[3],{
        scale:1.3,
        opacity:1
    })
   })
   elem.addEventListener("mouseleave",function(){
    gsap.to(elem.childNodes[3],{
        scale:0,
        opacity:0
    })
   })
   elem.addEventListener("mousemove",function(dets){
    gsap.to(elem.childNodes[3],{
        x:dets.x-elem.getBoundingClientRect().x -140,
        y:dets.y-elem.getBoundingClientRect().y - 60

    })
   })
})


}


function page3(){
    vidclk.addEventListener("click",function(){
        playbtn.style.opacity="0"
        video.play()
        gsap.to(video,{
            scale:"1",
            rounded:"0",
            duration:0.3,
            ease:"power2.out"
        })
    })
    
    
    video.addEventListener("click",function(){
        playbtn.style.opacity="1"
        video.pause()
        gsap.to(video,{
            scale:"0.0",
            rounded:"30px",
            duration:0.3,
            ease:"power2.in"
        })
    })
}

function page4(){
    imagep4.addEventListener("mouseenter",function(){
        videop4.play()
       gsap.to(imagep4,{
        paddingLeft:"37vh",
        width:"74%",
        opacity:0,
        ease:"power4.in"
       })
       gsap.to(videop4,{
        height:"57vh",
        width:"100%",
        opacity:1,
        ease:"power4.in"
       })
    })
    
    videop4.addEventListener("mouseleave",function(){
        videop4.pause()
       gsap.to(imagep4,{
        paddingLeft:"0",
        width:"100%",
        opacity:1,
        ease:"power4.in"
       })
       gsap.to(videop4,{
        height:"10vh",
        width:"0",
        opacity:0,
        ease:"power4.in"
       })
    })
    
    imagep42.addEventListener("mouseenter",function(){
        videop42.play()
       gsap.to(imagep42,{
        paddingLeft:"37vh",
        width:"74%",
        
        ease:"power4.in"
       })
       gsap.to(videop42,{
        height:"57vh",
        width:"100%",
        opacity:1,
        ease:"power4.in"
       })
    })
    
    videop42.addEventListener("mouseleave",function(){
        videop42.pause()
       gsap.to(imagep42,{
        paddingLeft:"0",
        width:"100%",
        
        ease:"power4.in"
       })
       gsap.to(videop42,{
        height:"10vh",
        width:"0",
        opacity:0,
        ease:"power4.in"
       })
    })
}

function page5ani(){
    page5.forEach(function(div){
        div.addEventListener("mouseenter",function(){
            gsap.to(div,{
                backgroundColor:"#2d2d2d",
                scale:1.05
            })
        })
        div.addEventListener("mouseleave",function(){
            gsap.to(div,{
                backgroundColor:"#111",
                scale:1
            })
        })
    })
    
    right.forEach(function(div){
        div.addEventListener("mouseenter",function(){
            gsap.to(div,{
                backgroundColor:"#212121",
                scale:1
            })
        })
        div.addEventListener("mouseleave",function(){
            gsap.to(div,{
                backgroundColor:"#111",
                scale:1
            })
        })
    })
}


function page6(){
    gsap.from(".btm-2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btm-2",
            scroller:".main",
            start:"top 80%",
            end:"top 10%",
            
            scrub:true
        }
    })
    gsap.from(".btm-3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btm-2",
            scroller:".main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    
    btm.forEach(function(bt) {
        bt.addEventListener("mouseenter", function() {
            gsap.to(bt, {
                x: "0",
                duration: 0.3
            });
        });
    
        bt.addEventListener("mouseleave", function() {
            gsap.to(bt, {
                x: "initial",
                duration: 0.3
            });
        });
    });
    
    btm2.forEach(function(bt2) {
        bt2.addEventListener("mouseenter", function() {
            gsap.to(bt2, {
                x: "0",
                duration: 0.3
            });
        });
    
        bt2.addEventListener("mouseleave", function() {
            gsap.to(bt2, {
                x: "initial",
                duration: 0.3
            });
        });
    });
}

function loadanimation(){
    let tl=gsap.timeline()
tl.from(".page1",{
    opacity:0,
    duration:0.2
})
tl.from(".page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%) ",
    borderRadius:"100px",
    ease:"expo.in",
    duration:0.8
   
})
tl.from("nav",{
    opacity:0,
    duration:0.3
})
tl.from(".nav-bottom",{
    opacity:0,
    duration:0.3
})
tl.from(".page1 h1,.page1 div,.page1 h4",{
    opacity:0,
    stagger:{
        amount:0.6
    },
    duration:0.5
})

}

function movingtext(){
    gsap.to(".pageex h1",{
        transform:"translateX(-90%)",
        scrollTrigger:{
          trigger:".pageex",
          scroller:".main",
          start:"top 0%",
          end:"top -100%",
          
          scrub:3,
          pin:true
        }
    })
}

ham.addEventListener("click",function(){
    console.log("hello")
    gsap.to(infonav,{
        marginLeft:0
    })
})

close.addEventListener("click",function(){
    console.log("hello")
    gsap.to(infonav,{
        marginLeft:"100vw"
    })
})

locomotive() 

navbar()

movingimg()

page2()

page3()

page4()

page5ani()

movingtext()

page6()

page1ani()

loadanimation()