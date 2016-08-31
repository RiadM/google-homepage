$(document).ready( function(){

 var big = prompt("How big you want the new grid ?");
	
 	//Definie the width of the wrapper so no need to thinker about row and colums
 	$(".wrap").width(big * 50);


//Add square to the wrapper
$(".wrap").append("<div class='out'></div>")
	for (i = 1 ; i  <= big ; i++) {
		for(j = 1 ; j <= big ; j++){
			$( ".out" ).append("<div class='in'></div>");
		}
		
	}
	
//When the mouse is inside the square it will change the color 
	$("div.in").mouseenter(function(){
		var colors = ['#ff0000', '#00ff00', '#0000ff'];
		var random_color = colors[Math.floor(Math.random() * colors.length)];
		$(this).css("background-color", random_color);
	});

//Button to reset the page so we can try a new configuration of square
	$('button').click(function(){
		location.reload();
	});
})