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
