$(function(){

	$('#go').on('click', function(){
		var hereNext = $(this).text()
		console.log(hereNext);
		var whereNext = {
			hereNext: hereNext
		}

		// var currentLocation = $(this).closest('div');
		// var nextLocation = currentLocation.next('div');
		// console.log(nextLocation)
		// var goHere = {
		// 	test: nextLocation
		// };
		$.get('/destination', whereNext, function(destination){
			// $(destination).css("display", "inline" );
			console.log(destination);
			$('#location').text("You have landed in "+destination.location);
			$('#description').text("Description "+destination.description);
			console.log(destination.nextLocation)
			$('#go').text(destination.nextLocation);

		})
		
	});



});