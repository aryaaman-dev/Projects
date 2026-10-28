var rect=document.querySelector("#center")

rect.addEventListener("mousemove",function (dets){
   var rectangleLocation= rect.getBoundingClientRect();     // used to find location 
   var insiderectval=(dets.clientX-rectangleLocation.left)

   if(insiderectval<rectangleLocation.width/2){
    var redColor=gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insiderectval)   // inp min,inp max,,out min,out max, current location of mouse
    gsap.to(rect,{
        backgroundColor: `rgb(${redColor},0,0)`,
        ease: Power4,
    })
   }
    else{
        var blueColor=gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderectval)   // inp min,inp max,,out min,out max, current location of mouse
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
   
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
}) 