
$(document).ready(function() {
	var numForm = 1;
	$('.intro').submit(function(event){
		event.preventDefault();
		$(this).addClass('hide');
		$('.question-nav').removeClass('hide');
		$('form:eq(1)').removeClass('hide');		
	});

	$('.next').click(function(event){
		$('form:eq('+numForm+')').addClass('hide');
		numForm++;
		$('form:eq('+numForm+')').removeClass('hide');

	})
});


/* pseudo code

check answer if right/wrong and count correct answer

var correct = 0;
if input == value then correct
	correct++
	alert('Good job! You got the correct answer.');
else 
	alert('Nice try but that is not the correct answer.');
*/




/*
	$('form:first').submit(function() {
		$(this).addClass('hide');
		alert('this is working');
	});
  */      
    

/*
// ALERT WHEN NEXT BUTTON IS CLICKED

alert('Good job! You got the correct answer.');


// Selects next sibling
$(event.target).next('form');

// Counter for correct answer
var correctAnswer = 0;
*/