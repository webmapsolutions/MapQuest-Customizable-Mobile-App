
<!DOCTYPE html> 
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<title>Multi-page template</title> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css" />
	<link rel="stylesheet" href="css/custom.css" />
	<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.js"></script>
	<script src="http://www.mapquestapi.com/sdk/js/v7.0.s/mqa.toolkit.js?key=Fmjtd%7Cluua2duzl9%2C2n%3Do5-hrysg"></script>
	<script src="js/custom.js"></script>
</head> 

	
	
<body> 


<!-- Start of first page: #main -->
<div data-role="page" id="main">

	<div data-role="header">
		<?php Layout::NavMenu(); ?>
	</div><!-- /header -->

	<div data-role="content" >	
		<h2>Map/List</h2>
		
		<div id="webmap_container">
			<div id="list_container">
				<ul id="list" data-role="listview" data-inset="true" data-theme="c" data-dividertheme="b">
					<li data-role="list-divider">Overview</li>
					<li><a class="ajax_call" href="#details" result="#ajaxResult">Intro to jQuery Mobile</a></li>
					<li><a class="ajax_call" href="#details" result="#ajaxResult">Features</a></li>
					<li><a class="ajax_call" href="#details" result="#ajaxResult">Accessibility</a></li>
					<li><a class="ajax_call" href="#details" result="#ajaxResult">Supported platforms</a></li>
				</ul>
			</div>
			<div id="map_container">
				<div id="map"></div>
			</div>
		</div>
		
	</div><!-- /content -->
	
	<div data-role="footer" data-theme="d">
		<h4>Page Footer</h4>
	</div><!-- /footer -->
</div><!-- /page main -->




<!-- Start of second page: #details -->
<div data-role="page" id="details" data-theme="d">

	<div data-role="header">
		<?php Layout::NavMenu(); ?>
	</div><!-- /header -->

	<div data-role="content" data-theme="d">
		<h2>Location Details</h2>
		<div id="ajaxResult"></div>
		<p><a href="#main" data-direction="reverse" data-role="button" data-theme="b">Back to map/list</a></p>	
	</div><!-- /content -->
	
	<div data-role="footer" data-theme="d">
		<h4>Page Footer</h4>
	</div><!-- /footer -->
</div><!-- /page details -->



</body>
</html>


<?php

class Layout
{
	static function NavMenu()
	{
	?>
		<div class="view_select" list_w="30" map_w="100" list_left="-30" map_left="0"><a data-role="button">map</a></div>
		<div class="view_select" list_w="30" map_w="70" list_left="0" map_left="30"><a data-role="button">map/list</a></div>
		<div class="view_select" list_w="100" map_w="70" list_left="0" map_left="100"><a data-role="button">list</a></div>
		<div class="clear"></div>
	<?php
	}
}

?>