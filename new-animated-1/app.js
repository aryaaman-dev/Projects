function heroAnimation(){
    gsap.to(".nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -30%",
        end:"top -11%",
        scrub:3
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
}
heroAnimation();

//Custom Cursor
let cursor=document.querySelector(".cursor")

let crsrBlr=document.querySelector(".crsr-background")
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
    crsrBlr.style.left=dets.x-175+"px"
    crsrBlr.style.top=dets.y-175+"px"
})
