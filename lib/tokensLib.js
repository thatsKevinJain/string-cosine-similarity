var tokensLib = {

	// Split the string that contains any character
	// other then alpha-numeric characters.
	tokenize: function (text) {
		return text.split(/[^A-Za-z0-9]+/);
	}
}

module.exports = tokensLib;