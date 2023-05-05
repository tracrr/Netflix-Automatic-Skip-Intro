// Keep track of the previous URL
var prevUrl = '';

// Check for changes in the URL every 5 seconds
setInterval(function() {
  if (window.location.href !== prevUrl) {
    prevUrl = window.location.href;
    // Find the video player element
    var videoElement = document.querySelector('video');

    // Wait for the "skip intro" button to appear and click it
    var intervalId = setInterval(function() {
      var skipButton = document.querySelector('.button-primary.watch-video--skip-content-button.medium.hasLabel.ltr-1d02up3');
      if (skipButton) {
        skipButton.click();
        clearInterval(intervalId);
      }
    }, 1000);
  }
}, 5000);
