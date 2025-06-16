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
chrome.contextMenus.onClicked.addListener(async (itemData, tab) => {
	if (itemData.menuItemId == "linkcart") {
		try {
			const injectionResults = await chrome.scripting.executeScript({
				target: { tabId: tab.id },
				func: function modifyDOM() {
					var tab_dom = {};
					var description = document.querySelector(`meta[name=\"description\"]`);
					tab_dom.description = description
						? description.getAttribute("content")
						: document.title;
					tab_dom.title = document.title ? document.title : "";
					tab_dom.link = window.location.href || "";
					return tab_dom;
				},
			});
			if (injectionResults && injectionResults[0] && injectionResults[0].result) {
				const result = injectionResults[0].result;
				chrome.storage.sync.get(null, function (storeResult) {
					var links = storeResult.links || "";
					var coll = (links.match(/<div id=\"accordion-/g) || []).length + 1;
					var acco = `
						<div id=\"accordion-${coll}\">
							<div class=\"d-flex\">
								<button type=\"button\" class=\"collapsible\">
									${result.title}
								</button>
								<span class=\"info-del\"><a href=\"#\" class=\"delete_acc\">DELETE</a></span>
							</div>
							<div class=\"content\">
								<a href=\"${result.link}\" class=\"d-none\"></a>
								<p>${result.description}</p>
							</div>
						</div>
					`;
					chrome.storage.sync.set({ links: links + acco }, function () {});
				});
			} else {
				console.error("No result from content script");
			}
		} catch (err) {
			console.error("Script injection failed:", err);
		}
	}
});
