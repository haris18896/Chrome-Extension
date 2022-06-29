// to not run it multiple times add if(typeof init === 'undefined'){}

chrome.runtime.sendMessage({ greeting: 'hello' }, function (response) {
  if (response?.farewell) {
    // logged in
    console.log('you have been logged in')
  } else {
    // not logged in
    console.log('You have not been logged in')
  }
})
