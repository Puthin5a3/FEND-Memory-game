'use strict';
var big = document.getElementsByClassName('deck');
/*
 * Create a list that holds all of your cards
 */
var small = document.getElementsByClassName('card');
var smalllist = [...small];
let timeStatus = 0;
var cardsMatched = document.getElementsByClassName('match');
var timeArea = document.getElementById('time');
var moves = 0;
var movesSection = document.getElementById("moves");
var cardStore = [];
var starCount = 3;
var starFrequency = [...document.getElementsByClassName('fa-star')];
var time;
var sec;
var min;
var hours;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//shuffling of cards
window.onload = mindgame();

function mindgame() {
  var endcards = shuffle(smalllist);
  for (var i = 0; i < endcards.length; i++) {
    big[0].append(endcards[i]);
  }
}
for (var i = 0; i < smalllist.length; i++) {
  smalllist[i].addEventListener("click", explorecard);
}
// functon
function explorecard() {
  if (timeStatus == 0) {
    startTimer();
    timeStatus = timeStatus + 1;

  }
  this.classList.add("card");
  this.classList.add("open");
  this.classList.add("show");
  this.classList.add("disable");
  cardStore.push(this);
  if (cardStore.length == 2) {
    moves = moves + 1;
    movesSection.innerHTML = moves;
    Frequency();
    if (cardStore[0].type == cardStore[1].type) {
      cardStore[0].classList.add("match", "disable");
      cardStore[1].classList.add("match", "disable");
      if (cardsMatched.length == 16) {
        clearInterval(time);
        Swal.fire({
          title: "WOW",
          html: 'Earned stars ' + starCount + '<i class ="fa fa-star"> </i><br> timing<br>' + hours + 'hours:' + min + 'minutes:' + sec + 'seconds',
          confirmButoonText: '<i class="fa fa-thumbsup"></i> Restart',
        }).then(() => {
          document.location.reload();
        });
      }
      cardStore = [];
    } else {
      cardStore[0].classList.add("unmatch");
      cardStore[1].classList.add("unmatch");
      cardStore.map((card) => {
        setTimeout(() => {
          card.classList.remove("unmatch", "open", "show", "disable")
        }, 200)
      })
      cardStore = [];
    }
  }
}
//timer function
function startTimer() {
  sec = 0;
  min = 0;
  hours = 0;
  time = setInterval(() => {
    sec = sec + 1;
    if (sec == 59) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hours = hours + 1;

    }
    timeArea.innerHTML = hours + " : " + min + " : " + sec;
  }, 1000)
}

//for refresshing the game
function redo() {
  document.location.reload();
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 // assigning values
function Frequency() {
  if (moves > 12 && moves <= 18) {
    starCount = 1;
    starFrequency[2].style.display = "none";
  }
  if (moves > 18) {
    starCount = 2;
    starFrequency[1].style.display = "none";
  }
}
