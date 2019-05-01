// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();

//   });


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if(request.atp == "pa"){

      	$.ajax({

    		  url: 'https://wdsproj-gauravrajput.c9users.io/dashboard/product',
          type: 'GET',
        	dataType: 'json',
           
        	success: (function(response) {
                        jsonData = response;
                        console.log(jsonData)
                        if(jsonData){
                            console.log("logged in")
                            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                              chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
                              console.log("message sent!")
                          });
                            
                          }

                      })
		    });
      
        // sendResponse({data:"logged in"});
      }
  });