// Wrap your code in a setTimeout function to introduce a delay
setTimeout(function () {
  // Function to check if the user is on a mobile device
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  // Check if the user is on a mobile device
  if (isMobileDevice()) {
    // Select all elements with the attribute 'data-ad-status' set to 'unfilled'
    const unfilledElements = document.querySelectorAll('[data-ad-status="unfilled"]');

    // Get the count of unfilled elements
    const unfilledCount = unfilledElements.length;

    // Check if the count is greater than 1
    if (unfilledCount > 1) {
      // Redirect to the '/ads-check' page
      window.location.href = '/dns-check';
    } else {
      console.log(`Number of elements with data-ad-status="unfilled": ${unfilledCount}`);
    }
  } else {
    console.log("This code is only for mobile users.");
  }

  // Call the checkStylePresence function after the delay
  checkStylePresence();
}, 2000); // 2000 milliseconds (2 seconds) delay

function checkStylePresence() {
  var elements = document.querySelectorAll('[style*="height: auto !important;"]');
  // Check if any elements with the style exist
  if (elements.length > 0) {
    // Elements with the style are present, do nothing or perform some action
    console.log('Elements with the style are present');
  } else {
    // Elements with the style are not present, redirect to /error/403
    console.log('Elements with the style are not present. Redirecting...');
    window.location.href = '/error/403'; // Update the URL to '/error/403'
  }
}
