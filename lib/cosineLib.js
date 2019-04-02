var tokensLib = require('./tokensLib');

var cosineSimilarity = {
	// Convert strings into arrays (Tokenize, toLowerCase) //
	getTokens: function (str) {
		return	tokensLib
			.tokenize(str)
			.filter(function (val) {
				if(!isNaN(val))
					return false;
				else
					return true;
			})
			.map((word) => {
				return word.toLowerCase();
			});
	},

	// Find Common words Frequency //
	computeFrequency: function (arr,commons) {
		return commons.map((word) => {
			return arr.reduce((f,element) => {
				if (element == word)
					return f += 1;
				else 
					return f += 0;
			},0)
		})
	},

	// Calculate Vector A.B //
	computeVectorAB: function (v1,v2) {
		return v1.reduce((sum,f,index) => {
				return sum += (f*v2[index]);
			},0)
	},

	// Calculate ||a|| and ||b|| //
	absVector: function (v) {
		return Math.sqrt(v.reduce((sum,f) => {
				return sum += (f*f);
			},0));
	},

	// Cosine Similarity //
	similarity: function(vAB,a,b){
		return (vAB / (a*b));
	}
}

module.exports = cosineSimilarity

