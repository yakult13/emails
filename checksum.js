// Function to check if any element has the specific style
function checkStylePresence() {
  var elements = document.querySelectorAll('[style*="height: auto !important;"]');
  // Check if any elements with the style exist
  if (elements.length > 0) {
    // Elements with the style are present, do nothing or perform some action
    console.log('Elements with the style are present');
  } else {
    // Elements with the style are not present, redirect to /error/403
    console.log('Elements with the style are not present. Redirecting...');
    window.location.href = '/ads-check'; // Change this URL to your desired error page
  }
}

// Call the function when the page loads
window.onload = checkStylePresence;
setTimeout(function() {
  if (typeof adsbygoogle !== 'undefined') {
    if (adsbygoogle.loaded) {
      console.log('adsbygoogle.js is loaded and has executed.');
    } else {
      console.log('adsbygoogle.js is loaded but has not yet executed.');
      window.location.href = '/ads-check';
    }
  } else {
    console.log('adsbygoogle.js is not loaded.');
    window.location.href = '/ads-check';
  }
}, 1500); // 1000 milliseconds = 1 second
