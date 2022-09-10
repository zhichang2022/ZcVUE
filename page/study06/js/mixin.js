const mixin = {
	data: {
		content: "contentMixin",
		msg: "msgMixin",
		console: "console:"
	},
	watch: {
		content: {
			handler(newValue, oldValue) {
				this.console += "<br> newValue : " + newValue
				this.console += "<br> oldValue : " + newValue
			},
			immediate: true,
		}
	},
	methods: {
		calc(a, b) {
			return a + b
		}
	},
	mounted() {
		this.console += "<br> mixin mounted"
	}
}
