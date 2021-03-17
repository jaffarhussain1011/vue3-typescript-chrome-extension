declare var browser: any;

browser.runtime.onMessage.addListener(function() {
  console.log("Hello from the background3");
});
