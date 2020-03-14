
//$("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false }, Minutes: { show: false } }});	


function showWinners()
{
	var winners = localStorage.getItem('winners');
	var winners = winners.split(",");
	console.log(winners);
	var winCount = parseInt(localStorage.getItem('winCount'));

		
		//////--------------showing and hiding loading div-----------
			$('#loading').show();
			for(var l = parseInt(winCount)+1; l <= 5; l++)
				$('#gen'+l).hide();			

			setTimeout(function() {
				$('.div-rand').show();
			}, 1000);
			setTimeout(function() {
				$('#loading').hide();
			}, 1500);
		//////--------------------------------------------------------

		///// ---- It is made to longing time of scrolling numbers -----------/////////
		setTimeout(function() {
			for(var k = 0; k < winners.length; k++) {
				$('#code-country'+(k+1)).html(10);
				$('#first-nums'+(k+1)+"-1").html(1);
				$('#first-nums'+(k+1)+"-2").html(0);
				$('#first-nums'+(k+1)+"-3").html(0);			  
				$('#second-nums'+(k+1)+"-1").html(1);
				$('#second-nums'+(k+1)+"-2").html(0);
				$('#third-nums'+(k+1)+"-1").html(1);
				$('#third-nums'+(k+1)+"-2").html(0);
			}
		}, 2500);

		setTimeout(function() {
			for(var k = 0; k < winners.length; k++) {
				$('#code-country'+(k+1)).html(65);
				$('#first-nums'+(k+1)+"-1").html(2);
				$('#first-nums'+(k+1)+"-2").html(8);
				$('#first-nums'+(k+1)+"-3").html(9);			  
				$('#second-nums'+(k+1)+"-1").html(7);
				$('#second-nums'+(k+1)+"-2").html(6);
				$('#third-nums'+(k+1)+"-1").html(4);
				$('#third-nums'+(k+1)+"-2").html(5);				
			}
		}, 3500);		

		setTimeout(function() {
			for(var k = 0; k < winners.length; k++) {
				$('#code-country'+(k+1)).html(99);
				$('#first-nums'+(k+1)+"-1").html(5);
				$('#first-nums'+(k+1)+"-2").html(9);
				$('#first-nums'+(k+1)+"-3").html(8);			  
				$('#second-nums'+(k+1)+"-1").html(2);
				$('#second-nums'+(k+1)+"-2").html(3);
				$('#third-nums'+(k+1)+"-1").html(8);
				$('#third-nums'+(k+1)+"-2").html(2);				
			}
		}, 4500);

		setTimeout(function() {
			for(var k = 0; k < winners.length; k++) {
				$('#code-country'+(k+1)).html(56);
				$('#first-nums'+(k+1)+"-1").html(7);
				$('#first-nums'+(k+1)+"-2").html(2);
				$('#first-nums'+(k+1)+"-3").html(3);			  
				$('#second-nums'+(k+1)+"-1").html(9);
				$('#second-nums'+(k+1)+"-2").html(6);
				$('#third-nums'+(k+1)+"-1").html(4);
				$('#third-nums'+(k+1)+"-2").html(3);				
			}
		}, 5500);
		//////// ------------   ---------------------------------/////////

		//// ------------------ There is main winners will be displayed --------///
		var sss; // only was used to save as string of array elements
		setTimeout(function() {
			for(var k = 0; k < winners.length; k++) {
				sss = winners[k];
				var str = sss.split("");

				$('#code-country'+(k+1)).html(str[3]+str[4]);
				$('#first-nums'+(k+1)+"-1").html(str[5]);
				$('#first-nums'+(k+1)+"-2").html(str[6]);
				$('#first-nums'+(k+1)+"-3").html(str[7]);
				$('#second-nums'+(k+1)+"-1").html(str[8]);			  
				$('#second-nums'+(k+1)+"-2").html(str[9]);
				$('#third-nums'+(k+1)+"-1").html(str[10]);
				$('#third-nums'+(k+1)+"-2").html(str[11]);
			}
		}, 6500);
		////////------------ ------------------ --------------------- ----------////
		
		localStorage.removeItem('winCount');	/// Clearing localStorage
		localStorage.removeItem('winners');
}