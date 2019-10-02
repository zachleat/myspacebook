class Success {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	render() {
		return `
<h2>Congratulations!</h2>
<p>You have been registered for <strong>myspacebook</strong>. Check your email for further instructions.</p>
`;
	}
}

module.exports = Success;