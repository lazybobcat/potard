Potard
======

Potard is a jQuery plugin that allow you to add a "knob", a circular input, to your website.

To use potard you simply need to include the js and css file. Note that if you want to be efficient, you should copy/paste js and css code into your generic js and css files.

You can use potard on an input or any other html tag that may contain a number.

Note : this plugin uses canvas so you need IE9+ (or any other real web browser) to make it work.


Usage
==

	<input type="text" class="potard" data-min="0" data-max="100" value="30">
	<script type="text/javascript">
		jQuery(function($) {
			$('.potard').potard();
		});
	</script>

You can also give potard many parameters, with an array when you apply potard to your html elements if these parameters are generic to all knobs, or by using "data-*" attribute in html tag, replacing "*" by the parameter name.


Here, we give some default parameters for each of our knobs (shadow, radius and thickness) :

	jQuery(function($) {
		$('.potard').potard({shadow:false, radius:75, thickness:8});
	});


Parameters
==

**min** : Minimal value of the knob. By default it's 0, but you can use this param to have a value in a custom range.

**max** : Maximal value of the knob. By default it's 100.

**color** : The color of knob's gauge. By default a light green.

 
**width** : Max width of knob and CSS width given to #potard_wrap. You cannot alter this parameter width data-width (does nothing). *Amelioration are planed for this*
 
**height** : Max height of knob and CSS height given to #potard_wrap. You cannot alter this parameter width data-height (does nothing). *Amelioration are planed for this*
 
**radius** : Circle radius. If bigger than width or height, it will be "cut".
 
**thickness** : Width/Thikness of the circle.
 
**lineColor** : The background/blank circle color.
 
**shadow** : A boolean, wether or not you want a shadow under the gauge.
 
**shadowColor** : The shadow color. By default a tranparent black.

**shadowOffsetX** : The horizontal shadow offset. You cannot alter this parameter width data-shadowOffsetX (does nothing).
 
**shadowOffsetY** : The vertical shadow offset. You cannot alter this parameter width data-shadowOffsetY (does nothing).
 
**shadowBlur** : The shadow blur/diffusion. You cannot alter this parameter width data-shadowBlur (does nothing).