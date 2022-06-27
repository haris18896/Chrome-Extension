if (typeof init === 'undefined') {
  const init = function () {
    console.log('inject.js init', token)
  }
  init()
}
