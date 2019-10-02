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
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			text-align: center;
		}
		h1 {
		}
		p {
			font-size: 3em;
			margin: 0;
		}
		.msb-logo {
			position: relative;
		}
		.msb-logo:before {
			content: "×";
			font-family: Arial Black;
			font-weight: 900;
			font-size: 20em;
		}
		.msb-logo:after {
			content: "";
			position: absolute;
			top: 8em;
			left: 50%;
			transform: translateX(-50%);
			background-color: orange;
			opacity: .85;
			border-radius: 50%;
			width: 6em;
			height: 6em;
		}
		</style>
	</head>
	<body>
		<h1>myspacebook</h1>
		${data.content}
		<div class="msb-logo"></div>
	</body>
</html>`;
	}
}

module.exports = Layout;