console.log('from sw extension');

loadContentScript();
/*var swbc = new BroadcastChannel('swtabs.bc');

swbc.onmessage = function(e){
	console.log(e);
}*/

function loadContentScript() {
  browser.tabs.executeScript({
    file: "swtabs.js"
  });
}

//browser.browserAction.onClicked.addListener(loadContentScript);

browser.runtime.onMessage.addListener((message) => {

	if(message != null){
		var title = message.content.toString();

		browser.tabs.query({}).then((tabs) => {
	      for (var tab of tabs) {
	        if ((tab.title).localeCompare(title) == 0) {
	          browser.tabs.update(tab.id, {
	              active: true
	          });
	        }
	      }
	    });
	}

});
