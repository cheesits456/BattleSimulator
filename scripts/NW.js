(function () {
	if (typeof nw !== "undefined") {
		// open links in the browser
		var win = nw.Window.get();
		win.on("new-win-policy", (frame, url, policy) => {
			policy.ignore();
			nw.Shell.openExternal(url);
		});
		// fix the size of the window made by NW.js
		var package = nw.require("package.json");
		if (package.window && package.window.height && package.window.width) {
			win.resizeBy(package.window.width - window.innerWidth, package.window.height - window.innerHeight);
		}
	}
})();
