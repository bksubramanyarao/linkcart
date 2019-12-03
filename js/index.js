require('../scss/style.scss')


/**
 ** DESCRIPTION: adds linkcart context menu on installing the extension
 */
chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		title: 'add to linkcart',
		id: 'linkcart',
		contexts: ['all']
	})
	chrome.storage.sync.set({ links: '' }, function () {
	})
})

/**
 ** DESCRIPTION: context menu to add links
 */
chrome.contextMenus.onClicked.addListener((itemData) => {
	if (itemData.menuItemId == "linkcart") {
		chrome.tabs.executeScript({
			code: '(' + modifyDOM + ')();'
		}, (result) => {
			var coll = document.querySelectorAll(".collapsible").length + 1
			var acco = `
					<div id="accordion-${coll}">
						<div class="d-flex">
							<button type="button" class="collapsible">
								${result[0].title}
							</button>
							<span class="info-del"><a href="#" class="delete_acc">DELETE</a></span>
						</div>
						<div class="content">
							<a href="${result[0].link}" class="d-none"></a>
							<p>${result[0].description}</p>
						</div>
					</div>
				`
			chrome.storage.sync.get(null, function (result) {
				var links = result.links + acco
				chrome.storage.sync.set({ links }, function () {
				})
			})
		})
	}
})

window.onload = (e) => {
	copyCartLink()
	getLinks()
	addLinks()
	clearLinks()
	deleteAccordion()
}

/**
 ** @param str String
 ** DESCRIPTION: copies to clipboard
 */
function copyToClipboard(str) {
	var el = document.createElement('textarea')
	el.value = str
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)
}


/**
 ** DESCRIPTION: gets tabs dom
 */
function modifyDOM() {
	var tab_dom = {}
	var description = document.querySelector(`meta[name="description"]`)

	tab_dom.description = description ? description.getAttribute('content') : document.title
	tab_dom.title = document.title ? document.title : ''
	tab_dom.link = window.location.href || ''
	return tab_dom
}


/**
 ** DESCRIPTION: copies all links in cart
 */
function copyCartLink() {
	var copylinks = document.querySelector('#copylinks')
	var links = ``
	if (copylinks) {
		copylinks.addEventListener('click', (e) => {
			var a_tags = document.querySelectorAll('.content a')
			if (a_tags.length > 0) {
				for (var a_tag of a_tags) {
					links += a_tag.getAttribute('href') + '\n\n'
				}
			}
			copyToClipboard(links)
			copylinks.innerHTML = 'COPIED !'
			setTimeout(() => {
				copylinks.innerHTML = 'COPY LINKS'
			}, 2000)
		})
	}
}

/**
 ** @param id of element
 ** DESCRIPTION: delete html element by id
 */
function removeElement(id) {
	var elem = document.getElementById(id)
	if (elem) {
		return elem.parentNode.removeChild(elem)
	}
}

/**
 ** DESCRIPTION: delete a single accordion
 */
function deleteAccordion() {
	var delete_acc = document.querySelectorAll(".delete_acc")
	if (delete_acc) {
		delete_acc.forEach((el) => {
			el.addEventListener("click", function (e) {
				var accordion_id = e.target.parentNode.parentNode.parentNode.getAttribute('id')
				removeElement(accordion_id)
				saveLinks()
			})
		})
	}
}

/**
 ** DESCRIPTION: fixes accordion to new links
 */
function accordion() {
	var coll = document.querySelectorAll(".collapsible")
	coll.forEach((el) => {
		el.addEventListener("click", function (e) {
			this.classList.toggle("active")
			var content = this.parentNode.parentNode.querySelector('.content')
			if (content.style.display === "block") {
				content.style.display = "none"
			} else {
				content.style.display = "block"
			}
		})
	})
}


/**
 ** DESCRIPTION: get stored links
 */
function getLinks() {
	chrome.storage.sync.get(null, function (result) {
		var main = document.querySelector('main')
		if (main) {
			main.innerHTML = result.links
			accordion()
			deleteAccordion()
		}
	})
}

/**
 ** DESCRIPTION: adds new link
 */
function addLinks() {
	var add_link = document.getElementById('addlink')


	if (add_link) {
		add_link.addEventListener('click', (e) => {

			chrome.tabs.executeScript({
				code: '(' + modifyDOM + ')();'
			}, (result) => {
				var coll = document.querySelectorAll(".collapsible").length + 1
				var acco = `
					<div id="accordion-${coll}">
						<div class="d-flex">
							<button type="button" class="collapsible">
								${result[0].title}
							</button>
							<span class="info-del"><a href="#" class="delete_acc">DELETE</a></span>
						</div>
						<div class="content">
							<a href="${result[0].link}" class="d-none"></a>
							<p>${result[0].description}</p>
						</div>
					</div>
				`

				accordion()
				deleteAccordion()

				document.querySelector('main').insertAdjacentHTML('beforeend', acco)

				accordion()
				deleteAccordion()

				saveLinks()
			})
		})
	}
}

/**
 ** DESCRIPTION: clears all links in store
 */
function clearLinks() {
	var clear_link = document.querySelector('#clearlink')
	if (clear_link) {
		clear_link.addEventListener('click', (e) => {
			chrome.storage.sync.set({ links: '' }, function () {
				document.querySelector('main').innerHTML = ''
			})
		})
	}
}

/**
 ** DESCRIPTION: saves links to store
 */
function saveLinks() {
	var accs_data = document.querySelector('main').innerHTML
	chrome.storage.sync.set({ links: accs_data }, function () {
	})
}

