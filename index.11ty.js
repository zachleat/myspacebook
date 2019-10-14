class Index {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	getSignupHtml() {
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

	getSoldHtml() {
		return `
<div class="msb-register" id="msb-register">
	<div class="msb-register-fields">
		<p class="msb-emoji">👩🏻‍🚀👨🏿‍🚀👨🏾‍🚀👨🏽‍🚀👨🏼‍🚀👨🏻‍🚀👩🏿‍🚀👩🏾‍🚀👩🏽‍🚀👩🏼‍🚀</p>
		<h2>It’s been an incredible journey!</h2>
		<p class="msb-seeya">We are happy to announce that effective immediately, myspacebook will be ending. Any content associated with your account will be deleted. We couldn’t be happier about this transition. Thank you for supporting us and being a part of this incredible journey!</p>
	</div>
</div>
`;
	}


	render() {
		return this.getSoldHtml();
	}
}

module.exports = Index;