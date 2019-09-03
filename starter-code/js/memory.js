class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    for (let index = this.cards.length - 1; index >= 1; index--) {

      let randomIndex = getRandomInt(0, index);
      let replacerHelper = this.cards[index];
      this.cards[index] = this.cards[randomIndex];
      this.cards[randomIndex] = replacerHelper;

    }
    return;
  }
  checkIfPair() {
    console.log(this.pickedCards[0].getAttribute("name"));
    if (this.pickedCards.length === 2) {
      this.pairsClicked++;
      document.getElementById("pairs_clicked").innerHTML = this.pairsClicked;
      

      if (this.pickedCards[0].getAttribute("name") === this.pickedCards[1].getAttribute("name")) {
        this.pickedCards = [];
        this.pairsGuessed+=1;
        document.getElementById("pairs_guessed").innerHTML = this.pairsGuessed;
        this.isFinished();
        return true;
      } else {
        setTimeout( () => {
        this.pickedCards[0].parentNode.childNodes[0].className = "back";
        this.pickedCards[0].parentNode.childNodes[1].className = "front";
        this.pickedCards[1].parentNode.childNodes[0].className = "back";
        this.pickedCards[1].parentNode.childNodes[1].className = "front";
        memoryGame.pickedCards = [];
      },1500)
        
      }
      return false;
    }

    console.log(memoryGame.pickedCards);
  }
    isFinished() {
      console.log(this.pairsGuessed, (this.cards.length/2))
      if (this.pairsGuessed === (this.cards.length / 2)) {
        alert("finished JUNGÄH")
        return true;

      }

      return false;
    }
  }