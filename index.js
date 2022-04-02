//set a variable 'player' as an object to hold the name of player and number of chips holding
let player = {
  name: 'Boy',
  chips: 45
}

//set the cards variable as an empty array to hold cards later on
//the sum variable adds the value of the cards generated
//hasBlackJack intializes as false to indicate the player hasn't attained blackjack yet
//isAlive initializes as false because the game is yet to start
//message variable initialized as empty quote will display messages later according to the outcome of the sum variable
//document.getElementById grabs the defined document element within the html and stores it in the corresponding variable
//playerEl.textContent displays the content of the 'player' object as text content

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ': ' + '$' + player.chips

// function getRandomCard generates a random card value
//Math.random generates the actual random card value as a floating number
//Math.floor converts the floating number to an integer
function getRandomCard() {
  let randomNumer = Math.floor( Math.random()*13 ) + 1 // +1 ensures the card starts at 1
  if (randomNumer > 10) {
      return 10
  } else if (randomNumer === 1) {
      return 11
  } else {
      return randomNumer
  }
}

//the boolean variable executeOnce will be used to ensure that the startGame function executes just once whenever the Start Game button is clicked
//executeOnce initializes as true
//using the if condition stating the if executeOnce is true, the startGame function executes the subsequent commands
//the function terminates at the end when it reaches line 55 where executeOnce becomes false
var executeOnce = true

    function startGame() {
      if(executeOnce) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        isAlive = true
        renderGame() 

        executeOnce = false
      }
       
    }
//the renderGame function generates the actual output seen on the screen manipulating the earlier defined variables starting at line7 using the loop an if.. else if.. condition
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }
  
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
      message = "Do you want to draw a new card?"
  } else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackJack = true
  } else {
      message = "You're out of the game!"
      isAlive = false
  }
  messageEl.textContent = message
}

//the newCard function is used to generate a New Card after the initial card draw using the startGame function
function newCard() {
if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}
}

