var editorExtensionId = 'hjnocfmkfaefkjikcnanplafacjameke'

// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId, { openUrlInEditor: url }, function (response) {
  if (!response.success) {
    handleError(url)
  } else {
    console.log('Successfully opened in editor')
  }
})
