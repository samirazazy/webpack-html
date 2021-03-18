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
         
  function showImg() {
             document.getElementById("ans0").style.display = "";
         }
         ///////////////
         ///////////////
         window.onscroll = function() {scrollFunction()};
         
         function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("myBtn").style.display = "block";
         } else {
         document.getElementById("myBtn").style.display = "none";
         }
         }	// When the user clicks on the button, scroll to the top of the document
         function topFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
         }		


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
  
              var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
              return headerHeight+20;
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
  
          var deviceOrientation;
  
          function getOrientation() {
              var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
              return orientation;
          }
  
          window.onresize = function() {
              deviceOrientation = getOrientation();
              handleHeader();
          }
          window.onload = handleHeader();
  
  
          function handleHeader() {
              if (deviceOrientation == "Landscape" || deviceOrientation == "Portrait") {
                  var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
                  $('.header-top-margin').css('margin-top', 0);
              } else {
                  var headerHeight = $('.custom-navbar')[0].getBoundingClientRect().height;
                  $('.header-top-margin').css('margin-top', 0);
              }
          }
  
          $(document).on('click', '.zoomiconimg', function() {
              customizeForDevice();
          });
  
          function customizeForDevice() {
              var ua = navigator.userAgent;
              var checker = {
                  iphone: ua.match(/(iPhone|iPod|iPad)/),
                  blackberry: ua.match(/BlackBerry/),
                  android: ua.match(/Android/)
              };
              setTimeout(function() {
                  if (checker.android) {
                      $('.modal-content .close').css("display", "none");
                  } else if (checker.iphone) {
                      $('.modal-content .close').css("display", "none");
                  }
              }, 200)
  
          }
      });
      
      <script type="text/javascript">
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