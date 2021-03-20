$(document).ready(function() {
	
	
         
             $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
                 event.preventDefault();
                 $(this).ekkoLightbox({
                     alwaysShowClose: true
                 });
             });
         
             $(".play-media").on("click", function() {
                 $(".play-media").not(this).each(function() {
                     this.pause();
                 });
                 this[this.paused ? "play" : "pause"]();
             });
         
             document.addEventListener('play', function(e) {
                 var audios = document.getElementsByClassName('play-media');
                 for (var i = 0, len = audios.length; i < len; i++) {
                     if (audios[i] != e.target) {
                         audios[i].pause();
                     }
                 }
             }, true);
         
         
             var calculateTop = function() {
                 /*if (window.innerWidth < 480) {
                     return 224
                 }
                 else {
                     return 231
                 }*/
                 var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
                 return 0;
             }
         
         
   $(document).on("scroll", onScroll);

        /*$('a[href^="#"]').on('click', function(e) {*/
        $('.clickClass').on('click', function(e) {
            e.preventDefault();
            $(document).off("scroll");
            //$(element).scrollTop(0)

            $('.navContainer li').each(function() {
                $(this).removeClass('active-menu');
            })
            $(this).parent().addClass('active-menu');
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.position().top - 24
            }, 500, 'swing', function() {
                //window.location.hash = target;
               // $(document).on("scroll", onScroll);
            });
        });
             function onScroll(event) {
                 var scrollPos = $(document).scrollTop();
                 $('.navContainer a').each(function() {
                     var currLink = $(this);
                     var refElement = $(currLink.attr("href"));
                     if ((refElement.position().top - calculateTop()) <= scrollPos && (refElement.position().top - calculateTop()) + refElement.height() > scrollPos) {
                         $('.navContainer ul li').removeClass("active-menu");
                         currLink.parent().addClass("active-menu");
                     } else {
                         currLink.parent().removeClass("active-menu");
                     }
                 });
             }
         <!-- code for header handling -->
         var deviceOrientation;
             function getOrientation() {
                 var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
                 return orientation;
             }
         
             window.onresize = function(){ 
                 deviceOrientation = getOrientation();
                 handleHeader();
             }
         
             window.onload = handleHeader();
         
             
             function handleHeader(){
                 if(deviceOrientation == "Landscape" || deviceOrientation == "Portrait"){                
                     var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
                     $('.header-top-margin').css('margin-top',0);
                 }else{
                     //alert('in else')
                     var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
                     $('.header-top-margin').css('margin-top',0);
                 }
             }
         // this need to be called for close button//
         $(document).on('click','.zoomiconimg', function(){
         customizeForDevice();
         });
             function customizeForDevice() {
                 var ua = navigator.userAgent;
                 var checker = {
                     iphone: ua.match(/(iPhone|iPod|iPad)/),
                     blackberry: ua.match(/BlackBerry/),
                     android: ua.match(/Android/)
                 };
         setTimeout(function(){
         if (checker.android) {
         	$('.modal-content .close').css("display","none");
         } else if (checker.iphone) {
         	$('.modal-content .close').css("display","none");
         }
         },200)
                 
             }
         });
         
         $(document).ready(function() {
                                                  var map = ["&\#1632;","&\#1633;","&\#1634;","&\#1635;","&\#1636;","&\#1637;","&\#1638;","&\#1639;","&\#1640;","&\#1641;"]
                                                  var Elementx = document.getElementsByClassName("ercarabic");
                                                  for(var i=0;i<Elementx.length;i++){
                                                                 Elementx[i].innerHTML = Elementx[i].innerHTML.replace(
                                                                                /\d(?=[^<>]*(<|$))/g,
                                                                                function($0) { return map[$0] }
                                                                 );
                                                  }
         
	
	
	
	
    //Deactivate Button1
 $('.sendButton').attr('disabled',true);
          var d = document.getElementById("myDIV");
         var btn = document.getElementById("myButton");
			 btn.style.opacity = 0.5;
         $('#message').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton').attr('disabled', false);
				  btn.style.opacity = 1;
             }
             else
             {
                 $('.sendButton').attr('disabled', true); 
				  btn.style.opacity = 0.5;
				  btn.value = "Show answer";
				 d.style.display = "none";
             }
         })  
    
    
     //Deactivate Button2
 $('.sendButton2').attr('disabled',true);
          var d2 = document.getElementById("myDIV2");
         var btn2 = document.getElementById("myButton2");
			 btn2.style.opacity = 0.5;
         $('#message2').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton2').attr('disabled', false);
				  btn2.style.opacity = 1;
             }
             else
             {
                 $('.sendButton2').attr('disabled', true); 
				  btn2.style.opacity = 0.5;
				  btn2.value = "Show answer";
				 d2.style.display = "none";
             }
         })  
    
    
    
     //Deactivate Button3
 $('.sendButton3').attr('disabled',true);
          var d3 = document.getElementById("myDIV3");
         var btn3 = document.getElementById("myButton3");
			 btn3.style.opacity = 0.5;
         $('#message3').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton3').attr('disabled', false);
				  btn3.style.opacity = 1;
             }
             else
             {
                 $('.sendButton3').attr('disabled', true); 
				  btn3.style.opacity = 0.5;
				  btn3.value = "Show answer";
				 d3.style.display = "none";
             }
         })  
        
         ////////
         
        $('.sendButton4').attr('disabled',true);
          var d4 = document.getElementById("myDIV4");
         var btn4 = document.getElementById("myButton4");
			 btn4.style.opacity = 0.5;
         $('#message4').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton4').attr('disabled', false);
				  btn4.style.opacity = 1;
             }
             else
             {
                 $('.sendButton4').attr('disabled', true); 
				  btn4.style.opacity = 0.5;
				  btn4.value = "Show answer";
				 d4.style.display = "none";
             }
         })
         ////////
         
         $('.sendButton5').attr('disabled',true);
          var d5 = document.getElementById("myDIV5");
         var btn5 = document.getElementById("myButton5");
			 btn5.style.opacity = 0.5;
         $('#message5').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton5').attr('disabled', false);
				  btn5.style.opacity = 1;
             }
             else
             {
                 $('.sendButton5').attr('disabled', true); 
				  btn5.style.opacity = 0.5;
				  btn5.value = "Show answer";
				 d5.style.display = "none";
             }
         })
         ////////
        $('.sendButton6').attr('disabled',true);
          var d6 = document.getElementById("myDIV6");
         var btn6 = document.getElementById("myButton6");
			 btn6.style.opacity = 0.5;
         $('#message6').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton6').attr('disabled', false);
				  btn6.style.opacity = 1;
             }
             else
             {
                 $('.sendButton6').attr('disabled', true); 
				  btn6.style.opacity = 0.5;
				  btn6.value = "Show answer";
				 d6.style.display = "none";
             }
         })
         ////////
         $('.sendButton7').attr('disabled',true);
          var d7 = document.getElementById("myDIV7");
         var btn7 = document.getElementById("myButton7");
			 btn7.style.opacity = 0.5;
         $('#message7').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton7').attr('disabled', false);
				  btn7.style.opacity = 1;
             }
             else
             {
                 $('.sendButton7').attr('disabled', true); 
				  btn7.style.opacity = 0.5;
				  btn7.value = "Show answer";
				 d7.style.display = "none";
             }
         })
         ////////
         $('.sendButton8').attr('disabled',true);
          var d8 = document.getElementById("myDIV8");
         var btn8 = document.getElementById("myButton8");
			 btn8.style.opacity = 0.5;
         $('#message8').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton8').attr('disabled', false);
				  btn8.style.opacity = 1;
             }
             else
             {
                 $('.sendButton8').attr('disabled', true); 
				  btn8.style.opacity = 0.5;
				  btn8.value = "Show answer";
				 d8.style.display = "none";
             }
         })
         ////////
         
         $('.sendButton9').attr('disabled',true);
          var d9 = document.getElementById("myDIV9");
         var btn9 = document.getElementById("myButton9");
			 btn9.style.opacity = 0.5;
         $('#message9').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton9').attr('disabled', false);
				  btn9.style.opacity = 1;
             }
             else
             {
                 $('.sendButton9').attr('disabled', true); 
				  btn9.style.opacity = 0.5;
				  btn9.value = "Show answer";
				 d9.style.display = "none";
             }
         })
         ////////
                 	////////
         
         $('.sendButton10').attr('disabled',true);
          var d10 = document.getElementById("myDIV10");
         var btn10 = document.getElementById("myButton10");
			 btn10.style.opacity = 0.5;
         $('#message10').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton10').attr('disabled', false);
				  btn10.style.opacity = 1;
             }
             else
             {
                 $('.sendButton10').attr('disabled', true); 
				  btn10.style.opacity = 0.5;
				  btn10.value = "Show answer";
				 d10.style.display = "none";
             }
         })
         ////////
                 	////////
         
         $('.sendButton11').attr('disabled',true);
          var d11 = document.getElementById("myDIV11");
         var btn11 = document.getElementById("myButton11");
			 btn11.style.opacity = 0.5;
         $('#message11').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton11').attr('disabled', false);
				  btn11.style.opacity = 1;
             }
             else
             {
                 $('.sendButton11').attr('disabled', true); 
				  btn11.style.opacity = 0.5;
				  btn11.value = "Show answer";
				 d11.style.display = "none";
             }
         })
         ////////
                 	////////
         
         $('.sendButton12').attr('disabled',true);
          var d12 = document.getElementById("myDIV12");
         var btn12 = document.getElementById("myButton12");
			 btn12.style.opacity = 0.5;
         $('#message12').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton12').attr('disabled', false);
				  btn12.style.opacity = 1;
             }
             else
             {
                 $('.sendButton12').attr('disabled', true); 
				  btn12.style.opacity = 0.5;
				  btn12.value = "Show answer";
				 d12.style.display = "none";
             }
         })
         ////////
                 	////////
        $('.sendButton13').attr('disabled',true);
          var d13 = document.getElementById("myDIV13");
         var btn13 = document.getElementById("myButton13");
			 btn13.style.opacity = 0.5;
         $('#message13').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton13').attr('disabled', false);
				  btn13.style.opacity = 1;
             }
             else
             {
                 $('.sendButton13').attr('disabled', true); 
				  btn13.style.opacity = 0.5;
				  btn13.value = "Show answer";
				 d13.style.display = "none";
             }
         })
         ////////
                 	////////
         
        $('.sendButton14').attr('disabled',true);
          var d14 = document.getElementById("myDIV14");
         var btn14 = document.getElementById("myButton14");
			 btn14.style.opacity = 0.5;
         $('#message14').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton14').attr('disabled', false);
				  btn14.style.opacity = 1;
             }
             else
             {
                 $('.sendButton14').attr('disabled', true); 
				  btn14.style.opacity = 0.5;
				  btn14.value = "Show answer";
				 d14.style.display = "none";
             }
         })
                  $('.sendButton15').attr('disabled',true);
          var d15 = document.getElementById("myDIV15");
         var btn15 = document.getElementById("myButton15");
			 btn15.style.opacity = 0.5;
         $('#message15').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton15').attr('disabled', false);
				  btn15.style.opacity = 1;
             }
             else
             {
                 $('.sendButton15').attr('disabled', true); 
				  btn15.style.opacity = 0.5;
				  btn15.value = "Show answer";
				 d15.style.display = "none";
             }
         })
             
             $('.sendButton16').attr('disabled',true);
          var d16 = document.getElementById("myDIV16");
         var btn16 = document.getElementById("myButton16");
			 btn16.style.opacity = 0.5;
         $('#message16').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton16').attr('disabled', false);
				  btn16.style.opacity = 1;
             }
             else
             {
                 $('.sendButton16').attr('disabled', true); 
				  btn16.style.opacity = 0.5;
				  btn16.value = "Show answer";
				 d16.style.display = "none";
             }
         })
             
             $('.sendButton17').attr('disabled',true);
          var d17 = document.getElementById("myDIV17");
         var btn17 = document.getElementById("myButton17");
			 btn17.style.opacity = 0.5;
         $('#message17').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton17').attr('disabled', false);
				  btn17.style.opacity = 1;
             }
             else
             {
                 $('.sendButton17').attr('disabled', true); 
				  btn17.style.opacity = 0.5;
				  btn17.value = "Show answer";
				 d17.style.display = "none";
             }
         })
             
               $('.sendButton18').attr('disabled',true);
          var d18 = document.getElementById("myDIV18");
         var btn18 = document.getElementById("myButton18");
			 btn18.style.opacity = 0.5;
         $('#message18').keyup(function(){
             if($(this).val().length !=0){
                 $('.sendButton18').attr('disabled', false);
				  btn18.style.opacity = 1;
             }
             else
             {
                 $('.sendButton18').attr('disabled', true); 
				  btn18.style.opacity = 0.5;
				  btn18.value = "Show answer";
				 d18.style.display = "none";
             }
         })
              
    
   $('.add-color').click(function(event){
       $(this).addClass('hight-light');
       
   }); 
   
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
event.preventDefault();
$(this).ekkoLightbox({
alwaysShowClose: true
});
});
$(".play-media").on("click", function() {
$(".play-media").not(this).each(function() {
this.pause();
});
this[this.paused ? "play" : "pause"]();
});
document.addEventListener('play', function(e) {
var audios = document.getElementsByClassName('play-media');
for (var i = 0, len = audios.length; i < len; i++) {
if (audios[i] != e.target) {
audios[i].pause();
}
}
}, true);
var calculateTop = function() {
    
/*if (window.innerWidth < 480) {
return 224
}
else {
return 231
}*/
var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
return 0;
}
$(document).on("scroll", onScroll);
$('a[href^="#"]').on('click', function(e) {
e.preventDefault();
$(document).off("scroll");
$('.navContainer li').each(function() {
$(this).removeClass('active-menu');
})
$(this).parent().addClass('active-menu');
var target = this.hash,
menu = target;
$target = $(target);
$('html, body').stop().animate({
'scrollTop': ($target.offset().top + 2) - calculateTop()
}, 500, 'swing', function() {
window.location.hash = target;
$(document).on("scroll", onScroll);
});
});
function onScroll(event) {
var scrollPos = $(document).scrollTop();
$('.navContainer a').each(function() {
var currLink = $(this);
var refElement = $(currLink.attr("href"));
if ((refElement.position().top - calculateTop()) <= scrollPos && (refElement.position().top - calculateTop()) + refElement.height() > scrollPos) {
$('.navContainer ul li').removeClass("active-menu");
currLink.parent().addClass("active-menu");
} else {
currLink.parent().removeClass("active-menu");
}
});
}
var deviceOrientation;
function getOrientation() {
var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
return orientation;
}
window.onresize = function(){ 
deviceOrientation = getOrientation();
handleHeader();
}
window.onload = handleHeader();
function handleHeader(){
if(deviceOrientation == "Landscape" || deviceOrientation == "Portrait"){                
var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
$('.header-top-margin').css('margin-top',0);
}else{
//alert('in else')
var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
$('.header-top-margin').css('margin-top',0);
}
}
// this need to be called for close button//
$(document).on('click','.zoomiconimg', function(){
customizeForDevice();
});
function customizeForDevice() {
var ua = navigator.userAgent;
var checker = {
iphone: ua.match(/(iPhone|iPod|iPad)/),
blackberry: ua.match(/BlackBerry/),
android: ua.match(/Android/)
};
setTimeout(function(){
if (checker.android) {
$('.modal-content .close').css("display","none");
} else if (checker.iphone) {
$('.modal-content .close').css("display","none");
}
},200)
}
});
$(document).ready(function() {
var map = ["&\#1632;","&\#1633;","&\#1634;","&\#1635;","&\#1636;","&\#1637;","&\#1638;","&\#1639;","&\#1640;","&\#1641;"]
var Elementx = document.getElementsByClassName("ercarabic");
for(var i=0;i<Elementx.length;i++){
Elementx[i].innerHTML = Elementx[i].innerHTML.replace(
/\d(?=[^<>]*(<|$))/g,
function($0) { return map[$0] }
);
}
});


function myFunction() {
			var elem = document.getElementById("myButton");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction2() {
			var elem = document.getElementById("myButton2");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction3() {
			var elem = document.getElementById("myButton3");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		
		function myFunction4() {
			var elem = document.getElementById("myButton4");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction5() {
			var elem = document.getElementById("myButton5");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction6() {
			var elem = document.getElementById("myButton6");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction7() {
			var elem = document.getElementById("myButton7");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV7");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction8() {
			var elem = document.getElementById("myButton8");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV8");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
	function myFunction9() {
		var elem = document.getElementById("myButton9");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV9");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}	
		function myFunction10() {
			var elem = document.getElementById("myButton10");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction11() {
			var elem = document.getElementById("myButton11");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV11");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction12() {
			var elem = document.getElementById("myButton12");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV12");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction13() {
			var elem = document.getElementById("myButton13");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV13");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}	
function myFunction14() {
	var elem = document.getElementById("myButton14");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV14");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		
		function myFunction15() {
			var elem = document.getElementById("myButton15");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV15");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction16() {
			var elem = document.getElementById("myButton16");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV16");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction17() {
			var elem = document.getElementById("myButton17");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV17");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction18() {
			var elem = document.getElementById("myButton18");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV18");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		function myFunction19() {
			var elem = document.getElementById("myButton19");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV19");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}	
		function myFunction20() {
			var elem = document.getElementById("myButton20");
    if (elem.value=="Hide answer") elem.value = "Show answer";
    else elem.value = "Hide answer";
  var x = document.getElementById("myDIV20");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}	

function topFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
         }	





function showImg() {
document.getElementById("ans0").style.display = "";
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}	// When the user clicks on the button, scroll to the top of the document


//underline first email
var contents = $('.para1').text().split(' '),
modText = '';
for (var i = 0; i < contents.length; i++) {
modText += '<span>' + contents[i] + '</span> ';
}
$('.para1').html(modText);
$('.para1').click(function (e) {
$(e.target).toggleClass('underline');
});


//underline second email
var contents = $('.para2').text().split(' '),
modText = '';
for (var i = 0; i < contents.length; i++) {
modText += '<span>' + contents[i] + '</span> ';
}
$('.para2').html(modText);
$('.para2').click(function (e) {
$(e.target).toggleClass('underline');
});
 


//circle first email
var contents = $('.para3').text().split(' '),
modText = '';
for (var i = 0; i < contents.length; i++) {
modText += '<span>' + contents[i] + '</span> ';
}
$('.para3').html(modText);
$('.para3').click(function (e) {
$(e.target).toggleClass('circle');
});


//circle second email
var contents = $('.para4').text().split(' '),
modText = '';
for (var i = 0; i < contents.length; i++) {
modText += '<span>' + contents[i] + '</span> ';
}
$('.para4').html(modText);
$('.para4').click(function (e) {
$(e.target).toggleClass('circle');
});
 
