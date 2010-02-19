;(function($){
	$.fn.itemOrganizer = function(options){
		
		//Override default options with user specified options
		var opts = $.extend({}, $.fn.itemOrganizer.defaults, options);
		
		return this.each(function(){
			//resize main container
			$(this).css('width',opts.width);
			$(this).css('height',opts.height);
			
			//Build app
			var main_container = $("<div class='itemOrganizer_area'></div>");
			var holder_ul = $("<ul></ul>");
			var left_arrow = $("<div id='itemOrganizer_left_arrow'></div>");
			var right_arrow = $("<div id='itemOrganizer_right_arrow'></div>");
			
			main_container.append(left_arrow);
			
			for(i=0;i<5;i++){
				var li = $("<li class='itemOrganizer_place_holder'></li>");
				var span = $("<span>" + (i+1) + "</span>");
				
				if(i==0){
					li.addClass('itemOrganizer_first_holder');
					li.addClass('itemOrganizer_left_holder');
				}else if(i==4){
					li.addClass('itemOrganizer_last_holder');
					li.addClass('itemOrgranizer_right_holder');
				}
				li.append(span);
				
				holder_ul.append(li);
				
			}
			
			main_container.append(holder_ul);
			main_container.append(right_arrow);
			/*<div class="draggable_area">
							<div class="left_arrow">
								
							</div>
							<ul>
								<li class="draggable_place_holder first_holder left_holder">
									<span>1</span>								
								</li>
								<li class="draggable_place_holder">
								  <span>2</span>
								</li>
								<li class="draggable_place_holder">
									<span>3</span>
								</li>
								<li class="draggable_place_holder">
								  <span>4</span>
								</li>
								<li class="draggable_place_holder last_holder right_holder">
								  <span>5</span>
								</li>
							</ul>
							<div class="right_arrow">
								
							</div>
						</div>
						<div class="draggable_items">
							<ul>
							</ul>
						</div>
					</div>*/
			
			
				
			
		});
		
	};
	
	function onDrop(){
			
	}
		
	function onDrag(){
			
	}
	
	//Default options
	$.fn.itemOrganizer.defaults = {
		width: "800",
		height: "400",
		items: [{
			id: "one",
			shortName: "one",
			longName: "one",
			html: "",
			onDrop: onDrop,
			onDrag: onDrag
		}]
	};
	
})(jQuery);