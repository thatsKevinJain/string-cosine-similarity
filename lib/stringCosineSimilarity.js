var cosineLib = require('./cosineLib');

// Find the cosine similarity between two strings //
var cosineSimilarity = {
	calculateSimilarity: function(string1,string2) {
		var arr1 = cosineLib.getTokens(string1);
		var arr2 = cosineLib.getTokens(string2);

		// Define Commons Array //
		var commons = arr1;

		// Word Frequency as Vectors //
		var v1 = cosineLib.computeFrequency(arr1,commons)
		var v2 = cosineLib.computeFrequency(arr2,commons)

		// Calculate Vector A.B //
		var vAB = cosineLib.computeVectorAB(v1,v2)

		// Abs Vector A and B //
		var a = cosineLib.absVector(v1)
		var b = cosineLib.absVector(v2)

		// Cosine Similarity //
		var similarity = cosineLib.similarity(vAB,a,b)
		return similarity
	}
}

module.exports = cosineSimilarity