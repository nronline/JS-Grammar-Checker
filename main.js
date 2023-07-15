/**
Author: Nick Rowe
Date: 15th July 2023
Version 1.0: This simple Javascript excercise experimenting with using higher order functions to manipulate arrays and the content of a story. 
**/

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//console.log(storyWords);

let count = 0;

// check the story for the unecessary word
storyWords = storyWords.filter(
  function(word){
    if(word != unnecessaryWord) {
      return word;
      console.log(story);
    }
  }
);

// check for the mispelled word and replace the value with the correct spelling
storyWords = storyWords.map(
  function(word){
    if(word == misspelledWord) {
      return 'beautiful';
    }
    else{
      return word;
    }
    console.log(story);
  }
);

// log the word count for each word in the story
storyWords.forEach(function(word) {
  word = count ++;
})

// scan the story for bad words
let badWordIndex = storyWords.findIndex(
  function(word){
    if(word == badWord) {
      return word;
    }
  }
);

// check if all words are less than 10 characters
let lengthCheck = storyWords.every(
  function(word){
    if(word.length < 10) {
      return word;
    }    
  }
);


// scan for word larger than 10 characters
let bigOlWord = storyWords.findIndex(
  function(word){
    if(word.length > 10) {
      return word;
    }
  }
);
console.log(bigOlWord);
storyWords[111] = 'whopping';



//console log true if all words meet the check
console.log(lengthCheck);

// count bad word index reference
console.log(badWordIndex);

// replace the bad word freaking with a more suitable word
storyWords[78] = 'really';

// count number of words
console.log(count);

// split words in story with a space
console.log(storyWords.join(' '));

