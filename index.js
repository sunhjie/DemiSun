$(document).ready(function(){
	console.log("enter jquery");
	$("th").each(function(index){
		$(this).click(function(){
			$("td:eq("+index+")").show();
			$("td:gt("+index+")").hide();
			$("td:lt("+index+")").hide();

			$(this).addClass('highlight');
			$(this).siblings().removeClass('highlight');
		})
	})
})