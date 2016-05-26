//Find the form

var registrationForm = document.querySelector("#book-us");

//WAIT FOR USER TO SUBMIT THE FORM
	var fullName = document.querySelector("#	name");
	var NameMessage = document.querySelector("#name-message");
	
	var emailInput = document.querySelector("#email-input");
	var emailMessage = document.querySelector("#email-message");


	// Listen for the blur event on the user input field
	fullName.onblur = function() {

		//name is invalid
		if (namePattern.test(this.value) ){
			//name is valid
			nameMessage.innerHTML = "";

		} else {
			NameMessage.innerHTML ="Name is invalid"
		}
			
	};

	// Listern for the blur event on the user input field
	emailInput.onblur = function() {

		//name is invalid
		if (emailPattern.test(this.value) ){
			//name is valid
			emailMessage.innerHTML = "";

		} else {
			emailMessage.innerHTML ="Email is invalid"
		}
			
	};



