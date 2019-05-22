$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function() {
		$("p").css("color", "red");
	})
	$("h2").hover(function(){
	$("h2").css("background-color","blue");
	})
	$("h2").hover(function(){
		$(this).css("font-size","50px");
	})
	$(".bottom_button").hover(function(){
		$("#container").css("background-color", "black");
	})
	$(".bottom_button").click(function(){
		$(".bottom_button").fadeToggle(1000, "swing");
	})
	$(".bottom_button").mouseenter(function(){
		$(".bottom_button").fadeTo(1000, 0.5);
	})
	$(".bottom_button").mouseleave(function(){
		$(".bottom_button").fadeTo(1000, 1);
	})
});
	