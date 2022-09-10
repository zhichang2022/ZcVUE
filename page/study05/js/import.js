var isie = false;
const ImportHtml = function(url) {
	return ImportContent(url, "text/html;charset=utf-8");
}
const reg =
	/\x3Ctemplate>([\d\D]*?)\x3C\/template>\s*\x3Cscript>\s*export\s*default\s*([\d\D]*?)\x3C\/script>\s*\x3Cstyle>([\d\D]*?)\x3C\/style>/;
const reg2 =
	/<template>([\d\D]*?)<\/template>\s*<script>\s*export\s*default\s*([\d\D]*?)<\/script>\s*<style>([\d\D]*?)<\/style>/;
const reg3 =
	/<template>([\d\D]*?)<\/template>\s*<script>\s*export\s*default\s*([\d\D]*?)<\/script>/;

function ImportContent(url, type) {
	let objName = "VUE_" + url.replace(/[\/|-]\s?/g, "_").toUpperCase()
	url = url + ".vue"
	let xmlHttp;
	if (window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlHttp = new ActiveXObject("MSXML2.ServerXMLHTTP");
				} catch (e) {}
			}
		}
		isie = true;
	} else {
		xmlHttp = new XMLHttpRequest();
	}
	try {
		xmlHttp.open("GET", url, false);
		xmlHttp.setRequestHeader("Accept", type)
		if (!isie) {
			xmlHttp.overrideMimeType(type);
			xmlHttp.send(null);
			let text = xmlHttp.responseText;
			let resultList = text.match(reg);
			if (!resultList) {
				resultList = text.match(reg2);
			}
			if (!resultList) {
				resultList = text.match(reg3);
			}
			let h = resultList[1]
			let j = resultList[2]
			let c = resultList[3]
			if (c && c.trim().length > 0) {
				let link = document.createElement("link")
				link.rel = "stylesheet"
				link.href = "data:text/css;base64," + Base64.toBase64(c);
				link.id = md5(url)
				document.head.appendChild(link)
			}
			let tempVue = eval("function " + objName + "(){return" + j + "};" + objName + "();")
			tempVue.template = h
			return tempVue
		} else {
			xmlHttp.send(null);
			if (xmlHttp.readyState == 4) {
				if (xmlHttp.status == 200 || xmlHttp.status == 0) {
					let text = xmlHttp.responseBody
					let resultList = text.match(reg);
					let h = resultList[1]
					let j = resultList[2]
					let c = resultList[3]
					let tempVue = eval("function " + objName + "(){return" + j + "};" + objName + "();")
					tempVue.template = h
					return tempVue
				}
			}
		}
	} catch (exception) {
		console.log("出错文件为:" + url)
		return {template:"<div>文件出错了</div>"}
	}
}
const ImportCode = function(url) {
	let type = "text/html;charset=utf-8";
	url = "code/" + url + ".txt"
	let xmlHttp;
	if (window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlHttp = new ActiveXObject("MSXML2.ServerXMLHTTP");
				} catch (e) {}
			}
		}
		isie = true;
	} else {
		xmlHttp = new XMLHttpRequest();
	}
	xmlHttp.open("GET", url, false);
	xmlHttp.setRequestHeader("Accept", type)
	if (!isie) {
		xmlHttp.overrideMimeType(type);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	} else {
		xmlHttp.send(null);
		if (xmlHttp.readyState == 4) {
			if (xmlHttp.status == 200 || xmlHttp.status == 0) {
				return xmlHttp.responseBody
			}
		}
	}
	return ""
}

const ImportText = function(url) {
	let type = "text/html;charset=utf-8";
	url = "content/" + url + ".txt"
	let xmlHttp;
	if (window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlHttp = new ActiveXObject("MSXML2.ServerXMLHTTP");
				} catch (e) {}
			}
		}
		isie = true;
	} else {
		xmlHttp = new XMLHttpRequest();
	}
	xmlHttp.open("GET", url, false);
	xmlHttp.setRequestHeader("Accept", type)
	if (!isie) {
		xmlHttp.overrideMimeType(type);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	} else {
		xmlHttp.send(null);
		if (xmlHttp.readyState == 4) {
			if (xmlHttp.status == 200 || xmlHttp.status == 0) {
				return xmlHttp.responseBody
			}
		}
	}
	return ""
}
