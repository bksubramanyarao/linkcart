
/**
 ** @param id of element
 ** DESCRIPTION: delete html element by id
 */
export function removeElement(id) {
	var elem = document.getElementById(id)
	if (elem) {
		return elem.parentNode.removeChild(elem)
	}
}


/**
 ** @param str String
 ** DESCRIPTION: copies to clipboard
 */
export function copyToClipboard(str) {
	var el = document.createElement('textarea')
	el.value = str
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)
}


/**
 ** @param arr Array
 ** DESCRIPTION: convert array to csv string
 */
export function makeCsv(arr) {
	var csv = arr.map(function (v) { return v.join(',') }).join('\n')
	return encodeURI("data:text/csv," + csv)
}
