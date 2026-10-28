let rect=document.querySelector("#center")

window.addEventListener("mousemove",function(dets){
    
    let cardHalfWidth=rect.getBoundingClientRect().width/2
    let xval=gsap.utils.mapRange(0,window.innerWidth,100+cardHalfWidth,window.innerWidth-100-cardHalfWidth,dets.clientX)
    gsap.to(rect,{
        left:xval,
        ease: Power4
    })
})



// let rect=document.querySelector("#center")

// window.addEventListener("mousemove",function(dets){

//     let mouseX=dets.clientX;
    
//     let cardHalfWidth=rect.getBoundingClientRect().width/2
   
//     let left =mouseX-cardHalfWidth;
//     let right=window.innerWidth-cardHalfWidth-100;

   
//     left=Math.max(200,left);
//     left=Math.min(left,right);

//     rect.style.left=left+"px";

    
// })


