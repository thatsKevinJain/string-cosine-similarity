# String Cosine Similarity

Finds cosine similarity between 2 strings

## Installation
Clone this repo and import it in your project, or you can directly install it using npm.
```
npm i string-cosine-similarity
```

## Getting Started
You can test this library by typing the following code.
```
var similarity = require('string-cosine-similarity')

var string1 = 'Julie loves me more than Linda loves me'
var string2 = 'Jane likes me more than Julie loves me'

console.log(similarity(string1, string2)) // 0.9302605094190635
```