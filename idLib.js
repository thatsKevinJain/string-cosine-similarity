// Pass 2 Strings to calculate cosine similarity //
var cosine = require('./lib/stringCosineSimilarity')
var bodyParser = require('body-parser');


// Define 2 Strings //
var licence = "STATE DRIVING LICENCE DL NO Valid Till INDIA COV DOI DOB Name Signature Authority Holder";
var aadhar = "Government of India Father Year of Birth Male Female"
var pan = "Govt. of India Income Tax Department Permanent Account Number Signature"

// var string1 = "THE UNION OF INDIA\nMAHARASHTRA STATE MOTOR DRIVING LICENCE\nDL NO MH02 20090164873. DOI: 01-10-2009\nValid Till 30-09-2029 (NT)\nDLD 11-03-2016\nAUTHORISATIC\" TO DRIVE FOLLOWMNG CLASS\nOF VEHICLES T. ROUGHOUT INDIA\nCOV\nCOV DOI\nLMV 01-10-2009\nFORM 7\nRULE 16 (2)\nBG\nDOB: 01-08-1991\nName ARMAAN REZA VANANCHAL\nS/DW of MUSTAFA REZA VANANCHAL\nAdd 501 AVALON CHS MHADA BLDG NO 07\nOSHIWARA ANDHERI-WEST MUMBAI\n13\nPIN 400053\nSignature &amp; ID of\nIssuing Authority MHO2 2016466\nSignature/Thumb\nImpression of Holder\n";


var checkID = {
	checkID: function(string1) {

		var licence_perc = cosine.calculateSimilarity(licence,string1)
		var aadhar_perc = cosine.calculateSimilarity(aadhar,string1)
		var pan_perc = cosine.calculateSimilarity(pan,string1)
		var response = 	[{
							id: 'Driving Licence',
							similarity: licence_perc
						},
						{
							id: 'Aadhar',
							similarity: aadhar_perc
						},
						{
							id: 'PAN',
							similarity: pan_perc
						}]

		return response
	} 
}

module.exports = checkID