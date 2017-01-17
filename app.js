
$(document).ready(function() {
	$('.intro').submit(function(event){
		event.preventDefault();
		$(this).addClass('hide');
		$('form:eq(1)').removeClass('hide');
	
		
	});
});

/*
	$('form:first').submit(function() {
		$(this).addClass('hide');
		alert('this is working');
	});
  */      
    

/*
// ALERT WHEN NEXT BUTTON IS CLICKED
alert('Nice try but that is not the correct answer.');
alert('Good job! You got the correct answer.');


// Selects next sibling
$(event.target).next('form');

// Counter for correct answer
var correctAnswer = 0;
*/