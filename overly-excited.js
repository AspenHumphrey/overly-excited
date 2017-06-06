// Create an array that contains the words in the sentence
let sentance = ["I", "am", "adding", "a", "sentence", "with", "excitement"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (sentance) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     for(var i = 0; i > sentance.length; i++){
        return `"${sentance.length[i]}`
     };
}
      console.log("sentance?", sentance );

//joining the sentace
let joinedSentance = sentance.join(" ")
console.log("sentance", joinedSentance);

// Invoke the function and pass in the array
//addExcitement(sentence)

	for(var i = 0; i > joinedSentance.length; i = i +3) {
    if (i == joinedSentance[i]) {
      console.log("blah", `"${joinedSentance[i]}" !`);
    }
};

//console.log("! every 3?", `${joinedSentance}` );