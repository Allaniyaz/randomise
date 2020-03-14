	localStorage.setItem('winCount', 0);
	localStorage.setItem('winners', 0);

	function alertShow()
	{   
		var text = $('#text').val();
		var name = $('#name').val();
		var address = $('#address').val();

		var number = $('#count').val();
		if(text != '')
		{
			var arr = text.split("\n");        	
	    	var randNums;
			var n = arr.length;
			var randText = '';
			var numbers = [];		


			//
			var arrNames = name.split("\n");
			var randNames = [];
			//
			//
			var arrAddresses = address.split("\n");
			var randAddresses = [];
			//
			var randNumbers = [];

			///// -------------------  Checking entered symbols for numbers --------///					
				for(var p = 0; p < n; p++) {
					var sss = arr[p]; 				/// Array element to String
					sss = sss.split(" ").join("");	/// Remove spaces in the String
					var str = sss.split("");   		/// String to a new array
					if(str.length >= 12) 
					{
						var sum = 0;
						for(var q = 0; 	q < str.length; q++) {
							if(0*str[q] == 0) sum++;
							else if(str[q]=='+' || str[q]==" " || str[q]=='(' || str[q]==')' || str[q]=='-') {
								str.splice(q, 1);
								q--;
							} 
							else break;
						}
						if(sum != str.length) {
							arr.splice(p, 1);
							n = arr.length;
							p--;							
						}
						else {
							arr[p] = str.join("");
						}
					}
					else 
					{
						arr.splice(p, 1);
						n = arr.length;
						p--;
					}
				}
			////  ----------------------------------------------------------------/////

			//////--------------showing and hiding loading div-----------
				$('#loading').show();

				setTimeout(function() {
					$('#loading').hide();
				}, 3000);
			//////--------------------------------------------------------
		
		
			for(var j=1; j<=parseInt(number); j++) {
				findWinner();	
			}

			function findWinner() {
				n = arr.length;
				var i = Math.floor(Math.random() * Math.floor(n));
				randText += arr[i]+"\n";
				//console.log(arr[i]+" - "+i);
				
				/// adding to array datas of each winner
				randNames.push(arrNames[i]);
				randAddresses.push(arrAddresses[i]);
				randNumbers.push(arr[i]);
				arrNames.splice(i,1);
				arrAddresses.splice(i,1);
				///
				arr.splice(i,1);
			}
			randNums = randText.split("\n");
			randNums.splice(randNums.length-1,1);
	
			localStorage.setItem('winCount', number);
			localStorage.setItem('winners', randNums);
			var url = document.location.href;
			url = url.split("");
			url[url.length-6] = 2;
			//document.location.href = url.join("");
			
			setTimeout(function() {
				window.open(url.join(""), '', 'scrollbars=1,height='+Math.max(500, screen.availHeight)+',width='+Math.max(500, screen.availWidth)) 
			}, 3500);	

			/// showing datas of winners
			for(var j=0; j<parseInt(number); j++) {
				$('.input-group').remove();
				$('.div-form').append("<div style='display: none;' class='wins-data'><input type='text' class='form-control' value='"+randNumbers[j]+"' readonly><br></div>");
				$('#div-names').append("<div style='display: none;' class='wins-data'><input type='text' class='form-control' value='"+randNames[j]+"' readonly><br></div>");
				$('#div-addresses').append("<div style='display: none;' class='wins-data'><input type='text' class='form-control' value='"+randAddresses[j]+"' readonly><br></div>");
			}
			setTimeout(function() { $('.wins-data').show(); }, 5000);
			///
		}
  	}		