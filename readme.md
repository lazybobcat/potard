Potard
======

Potard is a jQuery plugin that allow you to add a "knob", a circular input, to your website.

To use potard you simply need to include the js and css file. Note that if you want to be efficient, you should copy/paste js and css code into your generic js and css files.

You can use potard on an input or any other html tag that may contain a number.

Note : this plugin uses canvas so you need IE8+ (or any other real web browser) to make it work.

	<input type="text" class="potard" data-min="0" data-max="100" value="30">
	<script type="text/javascript">
		jQuery(function($) {
			$('.potard').potard();
		});
	</script>

You can also give potard many parameters, with an array when you apply potard to your html elements if these parameters are generic to all knobs, or by using "data-*" attribute in html tag, replacing "*" by the parameter name.

