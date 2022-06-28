// ************* Includes an array of content scripts we wish to run as part of the web page's context. *************
// Scripts that run in isolation in the context of the web page
// Content Scripts have easy access to the DOM of the web page. We make use of the content script to append our custom script – inject-script.js – into the DOM.

function injectScript(file_path, tag) {
  // inject custom script into the DOM
  var node = document.getElementByTagName(tag)[0]
  var script = document.createElement('script')

  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', file_path)
  node.appendChild(script)
}

injectScript(chrome.extension.getURL('injectScript.js'), 'body')

// send the required data to the background page
window.addEventListener('message', function (event) {
  console.log('event.data in contentScript.js: ', event.data)
  if (event.data.type && event.data.type == 'FROM_PAGE' && typeof chrome.app.isInstalled !== 'undefined') {
    chrome.runtime.sendMessage({ essential: event.data.essential })
  }
})
