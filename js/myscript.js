//JQUERY FOR SLIDING NAVIGATION   
$(document).ready(function() {

$('.carousel').carousel({
  interval: 2000
})

  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

//JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV   
         $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

//Youtube videos

$(".markpic").click(function(){
	$('.kathypic').addClass('hidden');
	$(".bobpic").addClass("hidden");
	$(".markpic").addClass("hidden");
	$(".video").append("<div class=\"markyoutube\"><iframe width=\"680\" height=\"315\" src=\"//www.youtube.com/embed/RIlfGYyrLpE\" frameborder=\"0\" allowfullscreen> </iframe><i class=\"fa fa-times fa-4x xmark\"></i></div>");
	$(".xmark").click(function(){
		$(".markyoutube").addClass('hidden');
		$('.kathypic').removeClass('hidden');
		$(".bobpic").removeClass("hidden");
		$(".markpic").removeClass("hidden");
	});

});

$(".kathypic").click(function(){
	$('.markpic').addClass('hidden');
	$(".bobpic").addClass("hidden");
	$(".kathypic").addClass("hidden");
	$(".video").append("<div class=\"kathyyoutube\"><iframe width=\"680\" height=\"315\" src=\"//www.youtube.com/embed/erckQoXZYeo\" frameborder=\"0\" allowfullscreen></iframe><i class=\"fa fa-times fa-4x xmark\"></i></div>");
	$(".xmark").click(function(){
		$(".kathyyoutube").addClass('hidden');
		$('.markpic').removeClass('hidden');
		$(".bobpic").removeClass("hidden");
		$(".kathypic").removeClass("hidden");
	});

});

$(".bobpic").click(function(){
	$('.markpic').addClass('hidden');
	$(".bobpic").addClass("hidden");
	$(".kathypic").addClass("hidden");
	$(".video").append("<div class=\"bobyoutube\"><iframe width=\"680\" height=\"315\" src=\"//www.youtube.com/embed/4qCc_09aWns\" frameborder=\"0\" allowfullscreen></iframe><i class=\"fa fa-times fa-4x xmark\"></i></div>");
	$(".xmark").click(function(){
		$(".bobyoutube").addClass('hidden');
		$('.markpic').removeClass('hidden');
		$(".bobpic").removeClass("hidden");
		$(".kathypic").removeClass("hidden");
	});

});

});