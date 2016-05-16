var app = angular
    .module("myModule", ['ngclipboard'])
    .controller("myController", function ($scope) {
        
        /* Template for array */
        var decodert = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
	                    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        /* English alphabet */
    	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


        /* Codes ****************************************************************************************************************************************/
    	var decoder =  ['l', 'w', 'q', 'Z', 'f', 'J', 'B', 'p', 'Y', 'G', 'd', 'M', 'T', 'j', 'V', 'y', 'Q', 'b', 'D', 'm', 'X', 'r', 'O', 'I', 'g', 't',
					    'L', 'k', 'A', 'x', 'U', 'a', 'P', 'K', 'E', 'i', 'u', 'o', 'H', 'v', 'e', 'R', 'W', 'n', 'C', 'N', 'c', 'S', 's', 'F', 'z', 'h'];
					    
	    var decoder2 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
	                    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        /************************************************************************************************************************************************/

		$scope.alphabet = alphabet;

		$scope.decoder = decoder;


		$scope.secretHash = function (input, array1, array2) {
        if (!input)
            return input;

            var output = "";
            var letter = "";

            for (var i = 0; i < input.length; i++) {

            	if(isLetter(input.charAt(i))){

	                for(var a = 0; a < array1.length; a++){
	                	if(input.charAt(i) == array1[a]){
	                		letter = array2[a];
	                	}
	                }

            	}

            	else {
            		letter = input.charAt(i);
            	}

                output = output + letter;
            }

            return output;
        };

        function isLetter (character) {
		   	var inputLetter = /^[a-zA-Z]+$/.test(character);
		    return inputLetter;
		};
    });