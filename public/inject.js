const init = function () {
  const injectElement = document.createElement('contentScript')
  injectElement.className = 'inject'
  injectElement.innerHTML = `Hello there, This is the Content Script from Inject.js`
  document.body.appendChild(injectElement)
}

init()
