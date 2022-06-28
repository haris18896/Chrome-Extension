// ********* An array of packaged resources expected to be used in a web page's context. For example, an image we intend to embed in a page or a custom script we want to inject.
// Scripts that are programmatically injected into the web page

function parseEssentialData() {
  //  procure required object from the page's JS context
  let main = {}

  main.performance = JSON.parse(JSON.stringify(window.performance)) || null

  return main
}

setInterval(() => {
  // send the gathered data to the content-script
  let essential = parseEssentialData()

  window.postMessage({ type: 'FROM_PAGE', essential: essential }, 500)
})
