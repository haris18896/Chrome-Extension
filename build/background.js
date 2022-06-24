chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  if (sender.url === blocklistedWebsite) return // don't allow this web page access
  if (request.openUrlInEditor) console.log('openUrlInEditor: ' + request.openUrlInEditor)
  openUrl(request.openUrlInEditor)
})
