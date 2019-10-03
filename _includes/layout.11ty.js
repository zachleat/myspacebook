class Layout {
	data() {
		return {};
	}

	render(data) {
		return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>MySpaceBook</title>
		<style>
		* {
			box-sizing: border-box;
		}
		html, body {
			height: 100%;
			margin: 0;
			padding: 0;
		}
		body {
			font-family: Helvetica, sans-serif;
			text-align: center;
		}
		label {
			white-space: nowrap;
		}
		input[type="checkbox"],
		input[type="radio"] {
			position: relative;
			top: -2px;
			margin-top: 0;
			margin-bottom: 0;
		}

		.msb-emoji {
			font-size: 7vw;
			margin: 0;
			width: 100%;
		}
		@media (min-width: 64em) { /* 1024px */
			.msb-emoji {
				font-size: 4.090909090909em; /* 72px /17.6 */
			}
		}

		.msb-hed {
			margin: 0 0 2em;
		}
		.msb-logo {
			display: block;
			position: relative;
			overflow: hidden;
			text-decoration: none;
		}
		.msb-logo,
		.msb-logo:visited {
			color: inherit;
		}
		.msb-logo:before {
			content: "×";
			line-height: 0.6;
			font-family: Arial Black;
			font-weight: 900;
			font-size: 20em;
		}
		.msb-logo:after {
			content: "";
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			background-color: orange;
			opacity: .85;
			border-radius: 50%;
			width: 6em;
			height: 6em;
		}

		.msb-main {
			margin: 0 auto;
			padding: 0 .5em;
			max-width: 53.125em; /* 850px /16 */
		}
		.msb-register,
		.msb-register input,
		.msb-register button {
			font-size: 1.1rem;
		}
		.msb-register-fields {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			border: 2px solid #ccc;
			border-radius: .5em;
			padding: 1em;
		}
		.msb-register input[type="email"] {
			width: 11em;
		}
		.msb-register input[type="email"],
		.msb-register-btn {
			height: 2.5rem;
			padding-left: .75em;
			padding-right: .75em;
		}
		.msb-register-fields > * {
			margin: .25em .5em;
		}
		.msb-register-btn {
			-webkit-appearance: none;
			background-color: #fff;
			color: #444;
			text-transform: uppercase;
		}
		.msg-register-privacy {
			display: block;
		}

		.msb-sponsor {
			margin-top: .5em;
		}
		.msb-sponsor-txt {
			text-transform: uppercase;
			font-size: 0.75em; /* 12px /16 */
			letter-spacing: 1px;
		}

		@media (min-height: 53.125em) { /* 850px /16 */
			body {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
			}
			.msb-foot {
				text-align: center;
				position: fixed;
				bottom: 1em;
			}
		}
		</style>
	</head>
	<body>
		<header>
			<a href="/" class="msb-logo" aria-hidden="true"></a href="/">
			<h1 class="msb-hed">myspacebook</h1>
		</header>
		<main class="msb-main">
			${data.content}
			<p class="msb-sponsor"><span class="msb-sponsor-txt">Sponsored</span> <a href="https://www.amazon.com/Adult-diapers/s?k=Adult+diapers"e>Driving cross country but don’t have time to stop?</a></p>
		</main>
		<footer class="msb-foot">
			<p>Created by <a href="https://zachleat.com/">zachleat</a>.</p>
		</footer>
		<script>
		var form = document.getElementById("msb-register");
		var email = document.getElementById("msb-email");
		if(form, email && "endsWith" in new String("")) {
			email.addEventListener("input", function(e) {
				if(e.target.value.endsWith("nasa.gov") ||
					e.target.value.endsWith("esa.int") ||
					e.target.value.endsWith("isro.gov.in") ||
					e.target.value.endsWith("jaxa.jp") ||
					e.target.value.endsWith("roscosmos.ru") ||
					e.target.value.endsWith("cnsa.gov.cn")) {
					form.setAttribute("action", "/success/");
				}
			});
		}
		</script>
	</body>
</html>`;
	}
}

module.exports = Layout;