
const tl = gsap.timeline()


tl.from('#animate',{
    duration: 1,
    x: -1000,
    opacity: 0,
   

})
gsap.from('#anty', {

     duration: 1.5,
    y: -200,
    opacity: 0,
   scale: 0,
   
   
})

gsap.from('#btn', {
  duration: 1,
    opacity: 0,
    scale: 0,
    
})




gsap.from('#img1', {
    x: 500,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger:"#img1",
        start: "top 90%",
       end:"top 50%",
    
        scroller:"body",
      
       scrub: 2,
        
    }
   
    
    
})

gsap.from('#btn2', {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger:"#btn2",
        scroller:"body",

        
    }
   
    
    
})
gsap.from('#btn3', {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger:"#btn3",
        scroller:"body",

        
    }
   
    
    
})
gsap.from('#btn4', {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger:"#btn4",
        scroller:"body",

        
    }
   
    
    
})


gsap.from("#img8", {
    duration: 1,
opacity: 0,

    x: -200,
  x: -200,
rotate: 180,
    scrollTrigger: {
        trigger: "#img8",
        start: "top 100%",
        end: "top 70%",
        scroller: "body",
   
    
    }
    
})

gsap.from("#img4", {
    duration: 1,
opacity: 0,
rotate: 180,
  x: 200,

    scrollTrigger: {
        trigger: "#img4",
        start: "top 100%",
        end: "top 70%",
        scroller: "body",
 
    
    }
    
})
gsap.from('#js', {
 x:-1500,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger:"#js",
        start: "top 90%",
       end:"top 50%",
    
        scroller:"body",
      scrub: 2,
     
        
    }
   
    
    
})
gsap.from('#js1', {
x:1500,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger:"#js1",
        start: "top 90%",
       end:"top 50%",
    
        scroller:"body",
      
     scrub: 2,
        
    }
   
    
    
})