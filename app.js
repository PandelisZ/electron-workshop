const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api
const path = require('path')         // https://nodejs.org/api/path.html
const url = require('url')           // https://nodejs.org/api/url.html

let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 400px
    width: 400,
    // Set the initial height to 500px
    height: 500,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    // Don't allow the window to be resized.
    resizable: true,
  })

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})




// Wait until the app is ready
// app.once('ready', () => {
// 
// 	const COINS = [
// 		'BTC',
// 		'ETH',
// 		'LTC'
// 	]
// 
// 	COINS.forEach((c) => {
// 		// Create a new window
// 	  window = new BrowserWindow({
// 	    // Set the initial width to 400px
// 	    width: 400,
// 	    // Set the initial height to 500px
// 	    height: 200,
// 	    // Don't show the window until it ready, this prevents any white flickering
// 	    show: false,
// 	    // Don't allow the window to be resized.
// 	    resizable: true,
// 	  })
// 
// 	  // Load a URL in the window to the local index.html path
// 	  window.loadURL(url.format({
// 	    pathname: path.join(__dirname, c.toLowerCase()+'.html'),
// 	    protocol: 'file:',
// 	    slashes: true
// 	  }))
// 
// 	  // Show window when page is ready
// 	    window.show()
// 	})
// 
// })
