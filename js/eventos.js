//var inicio =function()
{
	var datos =function()
	{
		$("#esau").show("slow");
		$("#textoesau").show("slow");
		$("#html1").hide("slow");
		$("#texto1").hide("slow");
		$("#html2").hide("slow");
		$("#texto2").hide("slow");
		$("#html3").hide("slow");
		$("#texto3").hide("slow");

		
	}
	var archivos = function()
	{
		$("#esau").hide("slow");
		$("#textoesau").hide("slow");
		$("#html1").show("slow");
		$("#texto1").show("slow");
		$("#html2").show("slow");
		$("#imghtml2").show("slow");
		$("#texto2").show("slow");
		$("#html3").show("slow");
		$("#texto3").show("slow");
		
	}
	var ini1 =function()
	{
		$("#esau").show("slow");
		$("#textoesau").hide("slow");
		$("#html1").hide("slow");
		$("#texto1").hide("slow");
		$("#html2").hide("slow");
		$("#texto2").hide("slow");
		$("#html3").hide("slow");
		$("#texto3").hide("slow");
	}

	$("#btndatos").on("click",datos);
	$("#btnarchivos").on("click",archivos);
	$("#btnini1").on("click",ini1);

}
$(document).on("ready",inicio);
