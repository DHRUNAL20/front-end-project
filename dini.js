$(document).ready(function(){
	$('#b').click(function(){
		$('#bill').text(" You Ordered "+$('#c1:checked').map(function(){return this.name;}).get().join(" , "));


	});
	$("#b1").click(function(){
		$("#opt").show();

	});
	$("#conf").click(function(){
		alert("THANK YOU FOR ORDERING. YOU WILL GET YOUR ORDER SOON")
	});
	

});