$(document).ready(function(){
	$(".open_text").click(function(){
  		var marker = $(this).children().eq(0);
  		if( $(this).next().css('display') == 'block')
  		{
  			marker.removeClass("negMark");
  			marker.addClass("posMark");
  		}
  		else
  		{
  			marker.removeClass("posMark");
  			marker.addClass("negMark");
  		}

  		$(this).next().slideToggle("normal");
	});
});