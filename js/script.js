
$(document).ready(function(){

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
				$(".map", "#basic > .demo").css("bottom", $(".footer", "#basic > .demo").height()+"px").width("100%");
				basicUpdateMapRatio($("#basic_mapratio").slider("value"));
			break;
			
			case "right":
				$(".details", "#basic > .demo").css("right", "0px");
				$(".details", "#basic > .demo").addClass("dockright");
				$(".map", "#basic > .demo").css("bottom", $(".footer", "#basic > .demo").height()+"px").width("100%");
				basicUpdateMapRatio($("#basic_mapratio").slider("value"));
			break;
			
			case "bottom":
				$(".map", "#basic > .demo").css("left", "0px").width("100%");
				$(".details", "#basic > .demo").addClass("dockbottom");
				$(".map", "#basic > .demo").css("bottom", ($(".footer", "#basic > .demo").height() + $(".details", "#basic > .demo").height())+"px").width("100%");
				basicUpdateMapRatio($("#basic_mapratio").slider("value"));
			break;
		}
	}
	updateDetailsPosition($("[name=basic_resultposition]:checked").val());
	

	// MAP RATIO SLIDER
    $("#basic_mapratio").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
            $("#basic_mapratioamount").val(ui.value);
			basicUpdateMapRatio(ui.value);
        }
    });
	basicUpdateMapRatio($("#basic_mapratio").slider("value"));
    $("#basic_mapratioamount").val($("#basic_mapratio").slider("value"));
	$("#basic_mapratioamount").change(function(){
		$("#basic_mapratio").slider("value", $("#basic_mapratioamount").val());
		basicUpdateMapRatio($("#basic_mapratioamount").val());
	});
	function basicUpdateMapRatio(val)
	{
		$(".map", "#basic > .demo").css("width", val+"%");
		var pos = $("[name=basic_resultposition]:checked").val();
		
		switch(pos)
		{
			case "left":
			case "right":
				$(".map", "#basic > .demo").css(pos, (100-val)+"%");
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
	
	
	// LOCATOR HEIGHT SLIDER
    $("#basic_locatorheight").slider({
        orientation: "horizontal",
        range: "min",
        min: 100,
        max: 900,
        value: 400,
        slide: function (event, ui) {
            $("#basic_locatorheightamount").val(ui.value);
			basicUpdateMapHeight(ui.value);
        }
    });
	basicUpdateMapHeight($("#basic_locatorheight").slider("value"));
    $("#basic_locatorheightamount").val($("#basic_locatorheight").slider("value"));
	$("#basic_locatorheightamount").change(function(){
		$("#basic_locatorheight").slider("value", $("#basic_locatorheightamount").val());
		basicUpdateMapHeight($("#basic_locatorheightamount").val());
	});
	function basicUpdateMapHeight(val)
	{
		$(".demo", "#basic").height(val);
	}
	
	
	
	// LOCATOR WIDTH SLIDER
    $("#basic_locatorwidth").slider({
        orientation: "horizontal",
        range: "min",
        min: 100,
        max: 1100,
        value: 600,
        slide: function (event, ui) {
            $("#basic_locatorwidthamount").val(ui.value);
			basicUpdateMapWidth(ui.value);
        }
    });
	basicUpdateMapWidth($("#basic_locatorwidth").slider("value"));
    $("#basic_locatorwidthamount").val($("#basic_locatorwidth").slider("value"));
	$("#basic_locatorwidthamount").change(function(){
		$("#basic_locatorwidth").slider("value", $("#basic_locatorwidthamount").val());
		basicUpdateMapWidth($("#basic_locatorwidthamount").val());
	});
	function basicUpdateMapWidth(val)
	{
		$(".demo", "#basic").width(val);
	}
	
	
	
	// ROUNDED CORNERS
    $("#basic_roundcorners").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 40,
        value: 5,
        slide: function (event, ui) {
            $("#basic_roundcornersamount").val(ui.value);
			basicUpdateRoundCorners(ui.value);
        }
    });
	basicUpdateRoundCorners($("#basic_roundcorners").slider("value"));
    $("#basic_roundcornersamount").val($("#basic_roundcorners").slider("value"));
	$("#basic_roundcornersamount").change(function(){
		$("#basic_roundcorners").slider("value", $("#basic_roundcornersamount").val());
		basicUpdateRoundCorners($("#basic_roundcornersamount").val());
	});
	function basicUpdateRoundCorners(val)
	{
		$(".demo", "#basic").css("border-radius", val + "px");
		$(".header", "#basic > .demo").css("border-top-left-radius", val + "px");
		$(".header", "#basic > .demo").css("border-top-right-radius", val + "px");
		$(".footer", "#basic > .demo").css("border-bottom-left-radius", val + "px");
		$(".footer", "#basic > .demo").css("border-bottom-right-radius", val + "px");
	}
	
});





