# FEND-Memory-game

## I did this project by following the below procedure.

1. Initially I downloaded the skeleton project from rubric structure which was provided by **udacity** (https://www.google.com).
2. Identified the classes like `open`, `show`, `match`, style properties of these and the beautification in output.
3. Removed the above classes from the root file ( `index.html` ). i.e, initially all the cards are empty.
4. Identified the `shuffle` function in app.js which was getting from stackoverflow.
5. Called all the card elements and stored it in an array named `smalllist` by using spread operator( `[...]` ). Initially I got HTMLCollection while I'm printing the array using `console.log()`, I used spread operator for converting that HTMLCollection into an array.
6. Used `window.onload` event for incepting the game using `mindgame()` function.
7. Called `shuffle` function into the `mindgame()` function, Gave the generated array( `smalllist` ) as parameter for that.
8. After testing the output in the browser, I came to understand that everything is working for till now.
9. Called `startTimer()` function for starting the timer, I used two timer functions for developing this game.
  + `setInterval`
  + `clearInterval`
10. Implemented a class named `disable` for disabling the card. I used property like `pointer-events` in it.
11. Stored the clicked cards into an array named `cardStore`. If the `array.length` matches to `2` then the functionalities like **matching** and **un matching** are invoked.
12. I applied few styles for showing the difference between **matching** and **un matching** of the cards. again wrote the code to empty the array( `cardStore=[]`) in both cases.
13. Moves count increases when the array length is equals to 2. Based on the moves count, the star rating will be generated. I gave breakpoints for them also.
  + 12 to 18 moves => `2 stars`
  + >18 => `1 star`.
  + otherwise (`<12`) => `3 stars`.
14. For working the timer I used 3 variable (`sec`, `min` and `hours`). These are varied by the `setTimeout()` function. If `sec==59` min equals to `min+1`. Similarly applied this conditions for `hours` also.
15. After all the cards got matched, A pop-up window shows a congratulatory message. I used **sweet alert** for implementing this.
