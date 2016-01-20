(function(){
	'use strict';
	
	angular
		.module('angularApp.angularFormly')
		.controller('AngularFormlyCtrl', angularFormlyCtrl);
	
	angularFormlyCtrl.$inject = ['angularFormlyFactory'];
	
	function angularFormlyCtrl(angularFormlyFactory) {
		
		var vm = this;
		vm.rental = {};
		
		vm.rentalFields = [
		  {
		  	key: 'first_name',
		  	type: 'input',
		  	templateOptions: {
		  		type: 'text',
		  		label: 'First Name',
		  		placeholder: 'Enter your first name',
		  		required: true,
				pattern: "^[a-zA-Z]+$"
		  	}
		  },
		  {
		  	key: 'last_name',
        type: 'input',
        templateOptions: {
        	type: 'text',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true
        }
		  },
		  {
        key: 'email',
        type: 'input',
        templateOptions: {
        	type: 'email',
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
		  },
		  {
		  	key: 'license',
        type: 'input',
        templateOptions: {
        	type: 'text',
          label: 'License',
          placeholder: 'Enter your license number',
          required: true,
          description: 'Only alphabets are allowed'
        },
        // Hide this field if we don't have any valid input in the first_name, last_name or email field
        hideExpression: '!model.first_name || !model.last_name || !model.email',
        // Custom validator to check whether the driver's license only allows alphabets characters
        validators: {
        	driversLicense: function($viewValue, $modelValue, scope) {
            var value = $modelValue || $viewValue;
            if(value) {
                // call the validateDriversLicense function which either returns true or false depending on whether the entry is valid
                return validateDriversLicence(value)
            }
        	}
        }
		  },
		  {
		  	key: 'states',
        type: 'select',
        templateOptions: {
        	label: 'States',
          // Call our province service to get a list
          // of provinces and territories
          options: angularFormlyFactory.getUsaStates()
        },
        hideExpression: '!model.license',
		  },
		  {
		  	key: 'under25',
        type: 'checkbox',
        templateOptions: {
            label: 'Are you under 25?',
        },
        hideExpression: '!model.license' 
		  }
		];
		
		function validateDriversLicence(value) {
			return /^[a-z]+$/i.test(value);
		}
		
	}
	
})();