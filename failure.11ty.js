class Failure {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	render() {
		return `
<h2>Sorry!</h2>
<p>We were unable to confirm the validity of your astronaut email address. Make sure that you are using an approved, valid space program email address. Please <a href="/">go back and try again</a>.</p>
`;
	}
}

module.exports = Failure;