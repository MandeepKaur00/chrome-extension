$(document).ready(function(){
	$('<div class="row"><div class="col-md-8" style="background-color:#f8f8f8;"><br><div class="progress" style="margin-top:5px;width:80%;margin-left:15px;"><div class="progress-bar progress-bar-striped active" id="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div></div><div class="col-md-4" style="background-color:#f8f8f8;"><button type="submit" style="float:right;margin-right:25px;margin-top:15px;margin-bottom:15px;" class="btn btn-group btn-sm">Add products from this page to your import list</button></div></div>').insertAfter("#top-lighthouse");


	$('button').click(function(){
		$.ajax({
			type:'POST',
			url:'',
			data:{},

			success: function(data){
				$('button').attr("disabled", true);
				var items = $('.item').length
				var increment_val = 100/items;
				var increment_val = Math.round(increment_val)
				
				for(var i=0;i<$('.item').length;i++){
					
					var new_value = $("#progress-bar").attr("aria-valuenow")
					var new_value = parseFloat(new_value)

					var new_value = new_value+increment_val
					if(new_value > 99.99){
						new_value = 100;
					}

					
					var new_value = new_value.toString()
					
					$("#progress-bar").css("width",new_value+"%").attr("aria-valuenow",new_value).text(new_value+"%");

					// $("#progress-bar").set(new_value+1);
					console.log(new_value)
  
		}
			}
		})
			
			
		
		
	})
});