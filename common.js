// JavaScript Document
$(document).ready(function(){
						   
						   
						   
						   
	$("#default").show("fast",function(){$("#default").css("color","red");});
	
	
	
	
	// jQuery methods go here...
	$(".wrapper .wrapperLeft ul li a").click(function(){
		//alert($(this));
		//alert($(this).html());
		
		
		var ref=$(this).attr("ref");
		
		$(".wrapper .wrapperRight div").each(function(){
			$(this).hide();
		});
		
		$(".wrapper .wrapperLeft ul li a").each(function(){
				$(this).css("color","#222");											 
		});
		
		
		$(this).css("color","red");
		
		$("#"+ref).show();
		//document.getElementById(ref).style.display="block";
		
		//$(this).parent().addClass("change");
		
	});





});