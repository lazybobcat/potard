jQuery(function($) {
	jQuery.fn.potard = function(params) {
		// Merge and initialize parameters
		var defaultParameters = jQuery.extend({
			min : 0,
			max : 100,
			color : '#81BE64',
			width : 200,
			height : 200,
			radius : 100,
			offset : 0,
			thickness : 20,
			lineColor : '#fff',
			shadow : true,
			shadowOffsetX : 2,
			shadowOffsetY : 0,
			shadowBlur : 4,
			shadowColor : 'rgba(0,0,0,0.3)'
		}, params);

		// Entry Point
		return this.each(function() {
			// Initialiaze variables
			var $t = $(this);
			// Get parameters from tag
			var params = jQuery.extend(jQuery.extend([],defaultParameters),$t.data());
			// CSS
			params.width = params.radius*2;
			params.height = params.radius*2;
			$t.addClass('potard_value');

			console.log(params);

			// Compute other variables
			var val = (($(this).val()) ? $(this).val() : (($(this).text()) ? $(this).text() : '0'));
			var a = (val - params.min) / (params.max - params.min);

			// Wrap element into a div and init canvas
			$t.wrap('<div class="potard_wrap" />');
			$t.parents('.potard_wrap').css({'width': params.width+'px', 'height': params.height+'px'});
			$t.css({'width': '100%', 'height': '100%', 'text-align': 'center', 'line-height': params.height+'px'});
			var $div = $t.parent();
			$circle = $('<canvas height="'+params.height+'px" width="'+params.width+'px"/>');
			$gauge = $('<canvas height="'+params.height+'px" width="'+params.width+'px"/>');
			$div.append($circle);
			$div.append($gauge);

			// Draw circle
			var m = 0;
			var ctx = $circle[0].getContext('2d');
			ctx.beginPath();
			ctx.lineWidth = params.thickness;
			ctx.strokeStyle = params.lineColor;
			if(params.shadow) {
				ctx.shadowOffsetX = params.shadowOffsetX;
				ctx.shadowOffsetY = params.shadowOffsetY;
				ctx.shadowBlur = params.shadowBlur;
				ctx.shadowColor = params.shadowColor;
				m = (params.shadowOffsetX > params.shadowOffsetY) ? params.shadowOffsetX : params.shadowOffsetY;
			}
			ctx.arc(params.width/2, params.height/2, params.radius-m-params.thickness/2, 0, 2*Math.PI);
			ctx.stroke();

			// Draw gauge
			var ctx = $gauge[0].getContext('2d');
			compute(params, a, $t, ctx, m);

			// Events
			$div.click(function(event) {
				event.preventDefault();
				compute(params, angle(event, $div, params), $t, ctx, m);
			});
			$div.mousedown(function(event) {
				event.preventDefault();
				$div.bind('mousemove', (function(event) {
					compute(params, angle(event, $div, params), $t, ctx, m);
				}));
			}).mouseup(function(event) {
				event.preventDefault();
				$div.unbind('mousemove');
			});
		});

		function angle(event, $div, params) {
			var x = event.pageX - $div.offset().left - params.width/2;
			var y = event.pageY - $div.offset().top - params.height/2;
			var a = (Math.atan2(x,-y)-params.offset/180*Math.PI) / (2*Math.PI); 
			if(a<0.0){a+=1;}
			return a;
		}
		
		function compute(params, a, $t, ctx, m) {
			ctx.clearRect(0,0,params.width,params.height);
			ctx.beginPath();
			ctx.lineWidth = params.thickness;
			ctx.strokeStyle = params.color;
			ctx.arc(params.width/2, params.height/2, params.radius-m-params.thickness/2, (-1/2+params.offset/180)*Math.PI, a*2*Math.PI+(-1/2+params.offset/180)*Math.PI);
			ctx.stroke();
			var val = Math.round(a*(params.max-params.min) + params.min);
			if($t[0].tagName == "INPUT") {
				$t.val(val);
			} else {
				$t.text(val);
			}
		}
	};
});