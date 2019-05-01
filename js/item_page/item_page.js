$(document).ready(function(){
	
	var htm = '<div class="footer"><div class="row"><div class="col-md-10"><div class="row" id="product_data"><div class="col-md-1"><button id="toggle" value="toggle">Toggle</div><div class="col-md-2"><b>SELLER</b><p class="item_desc">Fancesto Store</p></div><div class="col-md-2" ><b>ORDERS</b><p class="item_desc">25</p></div><div class="col-md-2"><b>SELLER SCORE</b></div><div class="col-md-2"><b>PRODUCT SCORE</b></div><div class="col-md-3"><b>OVERALL SCORE</b></div></div></div><div id="button_col" class="col-md-2"><button id="btn" class="btn btn-primary">Add to Import List</button></div></div><div class="row"><div class="col-md-3"></div><div class="col-md-9"><canvas id="myChart"  height="400" width="500"></canvas></div></div></div>'
	window.onload = function() {
	var ctx = document.getElementById('myChart');
	var chart = new Chart(ctx, {
    	type: 'line',
	    data: {
        	labels: ["2019-04-14","2019-04-15","2019-04-16","2019-04-17","2019-04-18","2019-04-19","2019-04-20","2019-04-21","2019-04-22","2019-04-23","2019-04-24","2019-04-25","2019-04-26","2019-04-27"],
        	datasets: [{
            	label: 'My First dataset',
            	data: [27,50,48,15,16,22,9,17,21,23,14,18,27,41]
        	}]
    	},

		options: {
                responsive: false
            }
  
});

}
	

$('#j-detail-page').prepend(htm)
$('#myChart').hide();
	$('#toggle').click(function(){
		// $('#myChart').show();
		var pId = $("input[name='objectId']").val();
		console.log(pId)

		chrome.runtime.sendMessage({"atp":"pa","pid": pId}, function(response) {
    	// console.log(response.data);
    	// if(response.data == "logged in"){
    	// 	$("#myChart").show();
    	// }

    // 	chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
				//    if (request.data == 'logged in') {
				//       console.log("Message recieved!");
				//    }
				// });

				chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

		  if (msg.action == 'open_dialog_box') {
		    $('#myChart').show();
		  }
		});
		});

		
	});
	
	// $.ajax({
 //    	url: 'https://home.aliexpress.com/dropshipper/product_analysis_ajax.htm?productId=32954104672',
 //        dataType: 'application/json',
 //        success: function(response) {
 //            jsonData = response;
 //            console.log(jsonData)
            
 //        }

// });
	
});

