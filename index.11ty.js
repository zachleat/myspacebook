class Index {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	render() {
		return `
<form method="get" action="/failure/" class="msb-register" id="msb-register">
	<div class="msb-register-fields">
		<p class="msb-emoji">👩🏻‍🚀👨🏿‍🚀👨🏾‍🚀👨🏽‍🚀👨🏼‍🚀👨🏻‍🚀👩🏿‍🚀👩🏾‍🚀👩🏽‍🚀👩🏼‍🚀</p>
		<label>
			Email
			<input type="email" id="msb-email" placeholder="astronaut@nasa.gov" required>
		</label>
		<button type="submit" class="msb-register-btn">🚀 Blast off</button>
		<label><input type="checkbox" required>I agree</label>
	</div>
</form>
`;
	}
}

module.exports = Index;