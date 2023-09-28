function areGoogleAdsDisplayed() {
    // Check for the presence of the Google Ads container element
    var adContainer = document.querySelector('.adsbygoogle');
    if (adContainer) {
        // Google Ads container is present, check if it's displayed
        var adStyles = window.getComputedStyle(adContainer);
        if (adStyles.display !== 'none') {
            // Ads are being displayed
            return true;
        } else {
            // Ads container is present but not displayed
            return false;
        }
    } else {
        // Google Ads container is not found
        return false;
    }
}

// Check if there are any errors in loading Google Ads
function areGoogleAdErrors() {
    // Check for error messages or indicators
    var errorIndicators = document.querySelectorAll('.adsbygoogle [data-ad-status="unfilled"]');
    if (errorIndicators.length > 0) {
        // Errors in loading ads are detected
        return true;
    } else {
        // No errors detected
        return false;
    }
}

// Wait for 1 second after page load and then check for Google Ads
window.addEventListener('load', function() {
    setTimeout(function() {
        if (areGoogleAdsDisplayed()) {
            console.log('Google Ads are being displayed.');
            if (areGoogleAdErrors()) {
                console.log('There are errors in loading Google Ads.');
                window.location.href = '/ads-check';
            } else {
                console.log('No errors in loading Google Ads.');
            }
        } else {
            console.log('No Google Ads are being displayed.');
            window.location.href = '/ads-check'; // Redirect to /error/403
        }
    }, 1000); // Wait for 1 second (1000 milliseconds)
});
