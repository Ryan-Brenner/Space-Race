$(document).ready(function(){


// var Player = function(number, name, ship){

// 	this.number='Player'+number, //treat number input as string
// 	this.name=name,
// 	this.ship=ship
// }
	
	
	$('body').on('keydown', function(e){
		if(e.keyCode===37){
			winner();
			scrollCheck();
			var player1_height=parseInt($('#p1').css('bottom'))
			if(player1_height<100){
				$('#p1').css('bottom', player1_height*=1.2);}
			if(player1_height>=100){
				$('#p1').css('bottom', player1_height+=100);}
			}});	

//$('p2type').on('submit',function(e){ if(this.value()='HUM'){
	$('body').on('keydown', function(e){
		if(e.keyCode===39){
			winner();
			scrollCheck();
			var player2_height=parseInt($('#p2').css('bottom'))
			if(player2_height<100){
				$('#p2').css('bottom', player2_height*=1.2);}
			if(player2_height>=100){
				$('#p2').css('bottom', player2_height+=100);}
			}});

	function winner(){
		if($('h1').hasClass("default")){
			if(player1_height>=1600){
				$('h1').html("Player 1 Wins!");
				$('h1').removeClass("default")
			}
			if(player2_height>=1600){
				$('h1').html("Player 2 Wins");
				$('h1').removeClass('default')
			}}}


	function scrollCheck() {

		
	};




/*closes ready function*/
});	

	