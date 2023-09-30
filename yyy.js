function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }

    // Wrap your code in a setTimeout function to introduce a delay
    setTimeout(function () {
      // Check if the user is on a mobile device
      if (isMobileDevice()) {
        // Select all elements with the attribute 'data-ad-status' set to 'unfilled'
        const unfilledElements = document.querySelectorAll('[data-ad-status="unfilled"]');

        // Get the count of unfilled elements
        const unfilledCount = unfilledElements.length;

        // Check if the count is greater than 1
        if (unfilledCount > 1) {
          // Redirect to the '/ads-check' page
          window.location.href = '/ads-check';
        } else {
          console.log(`Number of elements with data-ad-status="unfilled": ${unfilledCount}`);
        }
      } else {
        console.log("This code is only for mobile users.");
      }
    }, 2000); // 2000 milliseconds (2 seconds) delay
