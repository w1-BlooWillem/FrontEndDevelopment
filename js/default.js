var prevScrollpos = window.pageYOffset;
$(document).scroll(function() {
var currentScrollPos = window.pageYOffset;
if(currentScrollPos > 100){
 if (prevScrollpos  > currentScrollPos) {
     document.getElementById("zone-header-wrapper").style.top = "0px";
   
 } else if($(window).width() >= 767){
   document.getElementById("zone-header-wrapper").style.top = "-350px";
 } else if($(window).width() <= 380 ){
 
document.getElementById("zone-header-wrapper").style.top = "-100px";
 }
 prevScrollpos = currentScrollPos;
}
});