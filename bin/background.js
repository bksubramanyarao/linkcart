// Ensure all event listeners are registered at the top-level scope
chrome.runtime.onInstalled.addListener(() => {
	// Initialization code for context menus or storage
});

// Remove any DOM or window usage, as service workers do not have access
// ...existing code...
