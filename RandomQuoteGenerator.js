var quotes = [
["Setting an example is not the main means of influencing another, it is the only means.", "Albert Einstein"], ["The legacy of heroes is the memory of a great name and the inheritance of a great example.", "Benjamin Disraeli"], ["Nothing is so contagious as example; and we never do any great good or evil which does not produce its like.", "Francois de la Rochefoucauld"], ["Society is always taken by surprise at any new example of common sense.", "Ralph Waldo Emerson"], ["Few things are harder to put up with than a good example.", "Mark Twain"], ["Example is the best precept.", "Aesop "], ["I have ever deemed it more honorable and more profitable, too, to set a good example than to follow a bad one.", "Thomas Jefferson"], ["Example has more followers than reason.", "Christian Nevell Bovee"], ["Sports serve society by providing vivid examples of excellence.", "George F. Will"], ["You must inspire people to give it all they have by using yourself as an example.", "Byron and Catherine Pulsifer, more Common Traits of a Coach"], ["There are numerous examples of people throughout the world who have overcome handicaps to achieve great success.", "Dare 2 B U"]
];

$("#newQuoteButton").click( function() {
    var random = Math.floor(Math.random()*quotes.length);
    var item = quotes[random][0];
    var author = quotes[random][1]
   
    $(".quote").html("<p class='item'>" + item + "</p><br><p class='author'>" + author + "</p>");
   
});