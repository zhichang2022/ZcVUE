function Registry(app) {
	function Registry(app) {
		this.app = app;
	}
	Registry.prototype.addComponent = function(path) {
		ImportHtml("mobile/components/" + path).then(module => {
			this.app.component(path, module);
		})
	}
	return new Registry(app);
}

export default Registry;
