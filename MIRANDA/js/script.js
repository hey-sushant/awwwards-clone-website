gsap.to('#slide-container h1',{
    xPercent:-100,
    duration:12,
    repeat:-1,
    ease: "none",
})


let firstBox = document.querySelector('#h-box-container #first-h-box')
let secondBox = document.querySelector('#h-box-container #second-h-box')
let thirdBox = document.querySelector('#h-box-container #third-h-box')


firstBox.addEventListener('mouseenter',function(){
    gsap.to('#h-box-container #second-h-box',{
        x:'23vw',
        ease:'power2.inOut',
        duration:0.8
    })
    gsap.to('#h-box-container #third-h-box',{
        x:'23vw',
        ease:'power2.inOut',
        duration:0.8
    })
    gsap.to('#h-box-container #forth-h-box',{
        x:'23vw',
        ease:'power2.inOut',
        duration:0.8
    })
})
firstBox.addEventListener('mouseleave',function(){
    gsap.to('#h-box-container #second-h-box',{
        x:0,
    })
    gsap.to('#h-box-container #third-h-box',{
        x:0,
    })
    gsap.to('#h-box-container #forth-h-box',{
        x:0,
    })
})


secondBox.addEventListener('mouseenter',function(){
    gsap.to('#h-box-container #third-h-box',{
        x:'21vw',
        ease:'power2.inOut',
        duration:0.8
    })
    gsap.to('#h-box-container #forth-h-box',{
        x:'21vw',
        ease:'power2.inOut',
        duration:0.8
    })
})
secondBox.addEventListener('mouseleave',function(){
    gsap.to('#h-box-container #third-h-box',{
        x:0
    })
    gsap.to('#h-box-container #forth-h-box',{
        x:0
    })
})


thirdBox.addEventListener('mouseenter',function(){
    gsap.to('#h-box-container #forth-h-box',{
        x:'21.5vw',
        ease:'power2.inOut',
        duration:0.8
    })
})
thirdBox.addEventListener('mouseleave',function(){
    gsap.to('#h-box-container #forth-h-box',{
        x:0
    })
})



