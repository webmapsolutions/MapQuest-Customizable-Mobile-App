
$(document).ready(function(){


	// MAP RATIO SLIDER
	var basicUpdateMapRatio = function(val)
	{
		//$(".map", "#basic > .demo").css("width", val+"%");
		var pos = $("[name=basic_resultposition]:checked").val();
		
		switch(pos)
		{
			case "left":
			case "right":
				//$(".map", "#basic > .demo").css(pos, (100-val)+"%");
				$(".details", "#basic > .demo").css("width", (100-val)+"%");
				break;
			case "bottom":
				$(".map", "#basic > .demo").width("100%");
				$(".details", "#basic > .demo").width("100%");
				$(".map", "#basic > .demo").css("width", "100%");
				$(".details", "#basic > .demo").css("width", "100%");
				break;
		}
	}
	generateSlider("#basic_mapratio", 0, 100, 60, basicUpdateMapRatio);
	
	
	
	// POSITION OF MAP AND DETAILS
	$("[name=basic_resultposition]").change(function(){
		var pos = $("[name=basic_resultposition]:checked").val();
		updateDetailsPosition(pos);
	});
	function updateDetailsPosition(pos)
	{
		// reset current styles
		$(".details", "#basic > .demo").css("left", "").css("right", "");
		$(".map", "#basic > .demo").css("left", "").css("right", "");
		$(".details", "#basic > .demo").removeClass("dockleft").removeClass("dockright").removeClass("dockbottom");
		
		switch(pos)
		{
			case "left":
				$(".details", "#basic > .demo").css("left", "0px");
				$(".details", "#basic > .demo").addClass("dockleft");
				$(".map", "#basic > .demo").width("100%");
				basicUpdateMapRatio($("#basic_mapratio").slider("value"));
			break;
			
			case "right":
				$(".details", "#basic > .demo").css("right", "0px");
				$(".details", "#basic > .demo").addClass("dockright");
				$(".map", "#basic > .demo").width("100%");
				basicUpdateMapRatio($("#basic_mapratio").slider("value"));
			break;
			
			case "bottom":
				$(".map", "#basic > .demo").css("left", "0px").width("100%");
				$(".details", "#basic > .demo").addClass("dockbottom");
				$(".map", "#basic > .demo").width("100%");
				basicUpdateMapRatio($("#basic_mapratio").slider("value"));
			break;
		}
	}
	updateDetailsPosition($("[name=basic_resultposition]:checked").val());
	
	
	
	// SIDEBAR OPACITY SLIDER
	var basicUpdateSidebarOpacity = function(val)
	{
		$(".details", "#basic").css('opacity', val/100);
	}
	generateSlider("#basic_sidebaropacity", 0, 100, 75, basicUpdateSidebarOpacity);
	
	
	
	// LOCATOR HEIGHT SLIDER
	var basicUpdateMapHeight = function(val)
	{
		$(".demo", "#basic").height(val);
	}
	generateSlider("#basic_locatorheight", 100, 900, 400, basicUpdateMapHeight);
	
	
	
	// LOCATOR WIDTH SLIDER
	var basicUpdateMapWidth = function(val)
	{
		$(".demo", "#basic").width(val);
	}
	generateSlider("#basic_locatorwidth", 100, 1100, 600, basicUpdateMapWidth);
	
	
	
	// ROUNDED CORNERS
	var basicUpdateRoundCorners = function(val)
	{
		$(".demo", "#basic").css("border-radius", val + "px");
		$(".header", "#basic > .demo").css("border-top-left-radius", val + "px");
		$(".header", "#basic > .demo").css("border-top-right-radius", val + "px");
		$(".footer", "#basic > .demo").css("border-bottom-left-radius", val + "px");
		$(".footer", "#basic > .demo").css("border-bottom-right-radius", val + "px");
	}
	generateSlider("#basic_roundcorners", 0, 40, 5, basicUpdateRoundCorners);
	
	
	
	// SIDEBAR COLOR
	var initial_color = '#f1ede3';
	$(".details", "#basic > .demo").css("backgroundColor", initial_color);
	$('#basic_sidebarcolorpicker').attr('data-color', initial_color);
	$('input', '#basic_sidebarcolorpicker').attr('value', initial_color);
	
	$('#basic_sidebarcolorpicker').colorpicker({
		format: 'hex'
	}).on('changeColor', function(ev){
		$(".details", "#basic > .demo").css("backgroundColor", ev.color.toHex());
		$("#basic_sidebarcolor").attr('value', ev.color.toHex());
	});
	
	
	
	
	// SIDEBAR SHADOW
	var basicUpdateShadow = function(val)
	{
		var shadowStyle = $("#basic_shadowhoffsetamount").val() + 'px ' + $("#basic_shadowvoffsetamount").val() + 'px ' + $("#basic_shadowbluramount").val() + 'px ' + $("#basic_shadowspreadamount").val() + 'px #000';
		$(".details", "#basic").css('boxShadow', shadowStyle);
	}
	generateSlider("#basic_shadowhoffset", -15, 15, 0, basicUpdateShadow);
	generateSlider("#basic_shadowvoffset", -15, 15, 0, basicUpdateShadow);
	generateSlider("#basic_shadowblur", 0, 25, 10, basicUpdateShadow);
	generateSlider("#basic_shadowspread", -15, 15, 0, basicUpdateShadow);
	
	
	
	
	function generateSlider(sliderId, min, max, val, updateFunction)
	{
		$(sliderId).slider({
			orientation: "horizontal",
			range: "min",
			min: min,
			max: max,
			value: val,
			slide: function (event, ui) {
				$(sliderId+"amount").val(ui.value);
				updateFunction(ui.value);
			}
		});
		$(sliderId+"amount").val($(sliderId).slider("value"));
		$(sliderId+"amount").change(function(){
			$(sliderId).slider("value", $(sliderId+"amount").val());
			updateFunction($(sliderId+"amount").val());
		});
		updateFunction($(sliderId).slider("value")); // display initial value
	}
	
});





