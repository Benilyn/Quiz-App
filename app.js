
$(document).ready(function() {
	
	var formNum = 1;
	var correctAnswer = 0;
	var inputValue = [];
	

	$('.intro').submit(function(event){
		event.preventDefault();
		$(this).addClass('hide');
		$('.question-nav').removeClass('hide');
		$('form:eq(1)').removeClass('hide');		
	});

	$('.next').click(function(event){
		
		inputValue[formNum] = {
			choice: $('form:eq('+formNum+')' + ' input:checked').val(),
			answer: $('form:eq('+formNum+')').data('answer'),
			
		};
		
		

		if ($('form:eq('+formNum+') input:checked').length === 0) {
			alert('You must choose an answer before proceeding to the next question.');
		}
		else {
			if (inputValue[formNum].answer == inputValue[formNum].choice) {
	        	correctAnswer++;
	           	alert('Good job! You got the correct answer.');
	        }

	        else {
	            alert('Nice try but that is not the correct answer.');
	        }  
		
	    if (formNum === 10) {
	    	$('form:eq(10)').addClass('hide');
	    	$('button').remove();
	    	$('.result').append('You got ' + correctAnswer + ' out of 10.');
	    	$('.thank-you').append('Thank you for taking the test.');
	    }    

		$('form:eq('+formNum+')').addClass('hide');
		formNum++;
		$('form:eq('+formNum+')').removeClass('hide');
		
		

		}

         
	        
		

	});	
});
	






   