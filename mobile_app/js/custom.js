
$(document).ready(function(){

	$('.view_select').click(function(){
	
		var list_w = $(this).attr('list_w');
		var map_w = $(this).attr('map_w');
		var list_left = $(this).attr('list_left');
		var map_left = $(this).attr('map_left');
		
		
		//if(list_left >= 0) $('#list').show();
			
		$('#map_container').animate({width:map_w+"%", left:map_left+"%"}, 500, function(){
			window.map.setSize();
			$('#map').css('width', $('#map_container').width()+'px');
			$('#map div:first').css('width', $('#map_container').width()+'px');
			window.map.setSize();
		});
		$('#list_container').animate({width:list_w+"%", left:list_left+"%"}, 500, function(){
			//if(list_left < 0) $('#list').hide();
		});
		
	});
	
	
	
	MQA.EventUtil.observe(window, 'load', function() {
 
		var options={
			elt:document.getElementById('map'),       /*ID of element on the page where you want the map added*/ 
			zoom:10,                                  /*initial zoom level of the map*/ 
			latLng:{lat:39.743943, lng:-105.020089},  /*center of map in latitude/longitude */ 
			mtype:'map',                              /*map type (map)*/ 
			bestFitMargin:0,                          /*margin offset from the map viewport when applying a bestfit on shapes*/ 
			zoomOnDoubleClick:true                    /*zoom in when double-clicking on map*/ 
		};

		/*Construct an instance of MQA.TileMap with the options object*/ 
		map = new MQA.TileMap(options);
		
		
		
		MQA.withModule('largezoom','traffictoggle','viewoptions','geolocationcontrol','insetmapcontrol','mousewheel', function() {
		
			map.addControl(
			  new MQA.LargeZoom(),
			  new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT, new MQA.Size(5,5))
			);

			map.addControl(new MQA.TrafficToggle());

			map.addControl(new MQA.ViewOptions());

			map.addControl(
			  new MQA.GeolocationControl(),
			  new MQA.MapCornerPlacement(MQA.MapCorner.TOP_RIGHT, new MQA.Size(10,50))
			);

			/*Inset Map Control options*/ 
			var options={
			  size:{width:150, height:125},
			  zoom:3,
			  mapType:'map',
			  minimized:true };

			map.addControl(
			  new MQA.InsetMapControl(options),
			  new MQA.MapCornerPlacement(MQA.MapCorner.BOTTOM_RIGHT)
			);

			map.enableMouseWheelZoom();
		});
		
    });
	
	
});

$(function() {
 
	$(".ajax_call").click(function() {
	
		var arr = this.attributes, attributes = [];
		var params = new Object;
		
		for(index in arr)
		{
			if(!isNaN(index))
				params[arr[index]['name']] = arr[index]['value'];
		}

		$.ajax({
		  type: "GET",
		  url: "details.php",
		  data: params,
		  cache: false,
		  dataType: "text",
		  success: function(data){
			$(params['result']).html(data);
		  }
		});
	});

	if(typeof params !== 'undefined')
	{
		$(params['result']).ajaxError(function(event, request, settings, exception) {
		  $(params['result']).html("Error Calling: " + settings.url + "<br />HTPP Code: " + request.status);
		});
	}

	
	
	
});

