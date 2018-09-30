$("ul").on("click", "li", function(){
	$(this).toggleClass("selected")
})
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	})
	event.stopPropagation()

})
$("input").on("keypress", function(event){
	if(event.which === 13){
		var inputTxt = $(this).val()
		$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputTxt + "</li>")
	}
})
$("#lol").on("click", function(){
	$("input").fadeToggle()
})