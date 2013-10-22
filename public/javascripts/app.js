$(function(){
	$("[class*='hidden']").css("display", "none");


	$("[id*='button']").on('click', function(){
		var currentLocation = $(this).closest('div');
		var nextLocation = currentLocation.next('div');
		console.log(nextLocation)
		var goHere = {
			test: nextLocation
		};
		$.get('/destination', goHere, function(destination){
			// $(destination).css("display", "inline" );
			$('#currentlocation').append(destination);
		})
		console.log(destination);
	});



});