export function removeElement(id) {
	var elem = document.getElementById(id);
	if (elem) {
		return elem.parentNode.removeChild(elem);
	}
}
export function copyToClipboard(str) {
	if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
		return navigator.clipboard.writeText(str);
	} else {
		var el = document.createElement("textarea");
		el.value = str;
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
	}
}
export function makeCsv(arr) {
	var csv = arr
		.map(function (v) {
			return v.join(",");
		})
		.join("\n");
	return csv;
}
