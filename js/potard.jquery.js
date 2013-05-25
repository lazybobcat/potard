jQuery(function(a){jQuery.fn.potard=function(c){var b=jQuery.extend({min:0,max:100,color:"#81BE64",width:200,height:200,radius:100,thickness:20,lineColor:"#fff",shadow:true,shadowOffsetX:2,shadowOffsetY:0,shadowBlur:4,shadowColor:"rgba(0,0,0,0.3)"},c);return this.each(function(){var g=a(this);var f=jQuery.extend([],b);g.addClass("potard_value");f.min=(g.data("min"))?g.data("min"):f.min;f.max=(g.data("max"))?g.data("max"):f.max;f.color=(g.data("color"))?g.data("color"):f.color;f.radius=(g.data("radius"))?g.data("radius"):f.radius;f.thickness=(g.data("thickness"))?g.data("thickness"):f.thickness;f.lineColor=(g.data("linecolor"))?g.data("linecolor"):f.lineColor;f.shadow=(typeof(g.data("shadow"))!=="undefined")?g.data("shadow"):f.shadow;f.shadowColor=(g.data("shadowcolor"))?g.data("shadowcolor"):f.shadowColor;var e=((a(this).val())?a(this).val():((a(this).text())?a(this).text():"0"));var d=(e-f.min)/(f.max-f.min);g.wrap('<div class="potard_wrap" />').each(function(){var j=g.parent();$circle=a('<canvas height="'+f.height+'px" width="'+f.width+'px"/>');$gauge=a('<canvas height="'+f.height+'px" width="'+f.width+'px"/>');j.append($circle);j.append($gauge);var h=0;var i=$circle[0].getContext("2d");i.beginPath();i.lineWidth=f.thickness;i.strokeStyle=f.lineColor;if(f.shadow){i.shadowOffsetX=f.shadowOffsetX;i.shadowOffsetY=f.shadowOffsetY;i.shadowBlur=f.shadowBlur;i.shadowColor=f.shadowColor;h=(f.shadowOffsetX>f.shadowOffsetY)?f.shadowOffsetX:f.shadowOffsetY}i.arc(f.width/2,f.height/2,f.radius-h-f.thickness/2,0,2*Math.PI);i.stroke();var i=$gauge[0].getContext("2d");i.beginPath();i.lineWidth=f.thickness;i.strokeStyle=f.color;i.arc(f.width/2,f.height/2,f.radius-h-f.thickness/2,-1/2*Math.PI,d*2*Math.PI-1/2*Math.PI);i.stroke();j.mousedown(function(k){k.preventDefault();j.bind("mousemove",(function(n){var l=n.pageX-j.offset().left-f.width/2;var p=n.pageY-j.offset().top-f.height/2;var m=Math.atan2(l,-p)/(2*Math.PI);if(m<0){m+=1}i.clearRect(0,0,f.width,f.height);i.beginPath();i.lineWidth=f.thickness;i.strokeStyle=f.color;i.arc(f.width/2,f.height/2,f.radius-h-f.thickness/2,-1/2*Math.PI,m*2*Math.PI-1/2*Math.PI);i.stroke();var o=Math.round(m*(f.max-f.min)+f.min);if(g[0].tagName=="INPUT"){g.val(o)}else{g.text(o)}}))}).mouseup(function(k){k.preventDefault();j.unbind("mousemove")})})})}});