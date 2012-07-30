<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<title></title>
	
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<link type="text/css" href="css/ui-lightness/jquery-ui-1.8.20.custom.css" rel="stylesheet" />
	<link href="css/bootstrap.css" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">

	<script src="js/libs/modernizr-2.5.3.min.js"></script>

</head>
<body>
  <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
	
	
	<header>
		
	</header>
	
	
	<div id="main" role="main">
		
		<div id="tabs">
		
			<ul>
				<li><a href="#basic">Basic Layout</a></li>
				<li><a href="#tabs-2">Results Layout</a></li>
				<li><a href="#tabs-3">Info Bubble</a></li>
				<li><a href="#tabs-4">Search Filters</a></li>
				<li><a href="#tabs-5">Mobile</a></li>
				<li><a href="#tabs-6">Advanced</a></li>
			</ul>
			
			<div id="basic">
			
				<div class="controls" class="span12">
					<div class="span3">
						<p>Results Position</p>
						<div>
							<input type="radio" name="basic_resultposition" id="basic_resultposition_1" value="left" checked />
							<label for="basic_resultposition_1">Left</label>
						</div>
						<div>
							<input type="radio" name="basic_resultposition" id="basic_resultposition_2" value="right" />
							<label for="basic_resultposition_2">Right</label>
						</div>
						<div>
							<input type="radio" name="basic_resultposition" id="basic_resultposition_3" value="bottom" />
							<label for="basic_resultposition_3">Bottom</label>
						</div>
					</div>
					<div class="span3">
						<p>Map Ratio</p>
						<label for="basic_mapratioamount" class="pull-left">Map:</label>
						<input class="pull-left three_digit" type="text" name="basic_mapratioamount" id="basic_mapratioamount" />
						<div class="clearfix"></div>
						<div id="basic_mapratio"></div>
					</div>
					<div class="span3">
						<p>Locator Size</p>
						<label for="basic_locatorheightamount" class="pull-left">Height:</label>
						<input class="pull-left three_digit" type="text" name="basic_locatorheightamount" id="basic_locatorheightamount" />
						<div class="clearfix"></div>
						<div id="basic_locatorheight"></div>
						
						<div class="clearfix">&nbsp;</div>
						
						<label for="basic_locatorwidthamount" class="pull-left">Width:</label>
						<input class="pull-left three_digit" type="text" name="basic_locatorwidthamount" id="basic_locatorwidthamount" />
						<div class="clearfix"></div>
						<div id="basic_locatorwidth"></div>
					</div>
					<div class="span3">
						<p>Rounded Corners</p>
						<label for="basic_roundcornersamount" class="pull-left">Radius:</label>
						<input class="pull-left three_digit" type="text" name="basic_roundcornersamount" id="basic_roundcornersamount" />
						<div class="clearfix"></div>
						<div id="basic_roundcorners"></div>
					</div>
				</div>
				
				<div class="clearfix"></div>
				
				<div class="demo">
					<div class="header"></div>
					<div class="details"></div>
					<div class="map">&nbsp;</div>
					<div class="footer"></div>
				</div>
				
			</div>
			
			
			<div id="tabs-2">
				<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
			</div>
			<div id="tabs-3">
				<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
				<p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
			</div>
			<div id="tabs-4">
				<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
			</div>
			<div id="tabs-5">
				<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
			</div>
			<div id="tabs-6">
				<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
				<p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
			</div>
			
		</div>

		<a href="mobile_app/">view mobile app</a>
	</div>
	
	
	<footer>
		
	</footer>


	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

	<script src="js/plugins.js"></script>
	<script src="js/script.js"></script>
	<script type="text/javascript" src="js/libs/jquery-ui-1.8.20.custom.min.js"></script>

	<script>
	$(function() {
		$('#tabs').tabs(
			{
				remote:true, 
				ajaxOptions: {cache:false}, 
				spinner:'Loading', fx: { opacity: 'toggle', duration:300 } 
			});
	});
	</script>
	
	
	<script>
		var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
		(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
		g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>
</body>
</html>