  // Function to check if any element has the specific style or data-ad-status="filled"
function checkStylePresence() {
  var elementsWithStyle = document.querySelectorAll('[style*="height: auto !important;"]');
  var elementsWithDataAdStatus = document.querySelectorAll('[data-ad-status="filled"]');

  // Check if any elements with the style or data-ad-status="filled" exist
  if (elementsWithStyle.length > 0 || elementsWithDataAdStatus.length > 0) {
    // Elements with the style or data-ad-status="filled" are present, do nothing or perform some action
    console.log('Elements with the style or data-ad-status="filled" are present');
  } else {
    // Elements with the style or data-ad-status="filled" are not present, redirect to /error/403
    console.log('Elements with the style or data-ad-status="filled" are not present. Redirecting...');
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
}, 1500); // 1500 milliseconds = 1.5 seconds
