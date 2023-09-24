function isOPR() {
  return window.navigator.userAgent.includes("OPR");
}
function isMini() {
  return window.navigator.userAgent.includes("Mini");
}
if (isOPR() || isMini()) {
  window.location.href = '/blocked-browser';
}
