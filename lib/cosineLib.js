var stopwords=['about','above','after','again','all','also','am','an','and','another','any','are','as','at','be','because','been','before','being','below','between','both','but','by','came','can','cannot','come','could','did','do','does','doing','during','each','few','for','from','further','get','got','has','had','he','have','her','here','him','himself','his','how','if','in','into','is','it','its','itself','like','make','many','me','might','more','most','much','must','my','myself','never','now','of','on','only','or','other','our','ours','ourselves','out','over','own','said','same','see','should','since','so','some','still','such','take','than','that','the','their','theirs','them','themselves','then','there','these','they','this','those','through','to','too','under','until','up','very','was','way','we','well','were','what','where','when','which','while','who','whom','with','would','why','you','your','yours','yourself','$','1','2','3','4','5','6','7','8','9','0'];

var tokensLib = require('./tokensLib');
var anglicize= require('anglicize');

var cosineSimilarity = {
	// Convert strings into arrays (Anglicize, Remove Stop Words, Tokenize, toLowerCase) //
	getTokens: function (str) {
		return	tokensLib
				.tokenize(anglicize(str))
				.filter(function (val) {
					if(stopwords.indexOf(val)>=0)
						return false;
					else if(!isNaN(val))
						return false;
					else
						return true;
				}).map((word) => {
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

