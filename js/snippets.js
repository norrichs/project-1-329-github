// figuring out scroll direction
// https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st;
});