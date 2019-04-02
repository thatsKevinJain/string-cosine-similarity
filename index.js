// Pass 2 Strings to calculate cosine similarity //
var cosine = require('./lib/stringCosineSimilarity')

function similarity(string1, string2) {
	return cosine.calculateSimilarity(string1, string2)
}

module.exports = similarity