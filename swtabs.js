
function focusTabFirefox(title){
	browser.runtime.sendMessage({content: title});
}

/*function notify(message) {
  browser.runtime.sendMessage({content: "Function call: " + message});
}*/

exportFunction(focusTabFirefox, window, {defineAs:'focusTabFirefox'});