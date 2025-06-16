// Copied from original background.js and index.js as service worker
// Register context menu and storage initialization
chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		title: "add to linkcart",
		id: "linkcart",
		contexts: ["all"],
	});
	chrome.storage.sync.set({ links: "" }, function () {});
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener((itemData) => {
	if (itemData.menuItemId == "linkcart") {
		// You may want to message the content script or handle logic here
	}
});
