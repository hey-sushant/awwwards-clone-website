let crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+"px"
    crsr.style.top = dets.y +"px"
})
let crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsrBlur.style.left =dets.x-150+"px"
    crsrBlur.style.top = dets.y-150 +"px"
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})


let h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elm){
    elm.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border ="0.5px solid #fff"
        crsr.style.backgroundColor ="transparent"

    })
    elm.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border ="0px solid #95C11E"
        crsr.style.backgroundColor ="#95C11E"

    })
})


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }   
})
gsap.from(".card",{
    x:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:2
    }   
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})


gsap.from("#page4 h1",{
    y:"200%",
    opacity:0,
    duration:0.8,
     scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }

})

