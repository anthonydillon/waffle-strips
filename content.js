// List of developer repos
var developerRepoNames = [
  'Vanilla Framework',
  'Vanilla boilerplate theme',
  'Vanilla brochure theme',
  'Vanilla dashboard theme',
  'Vanilla docs',
  'Vanilla docs theme',
  'Vanilla homepage',
  'Vanilla store'
];

(function(){
  // This is called initially to wait to the cards to be rendered. 
  // Polling every second. 
  function onload() {
    setTimeout(function(){
      var cards = document.querySelectorAll('.card');
      var board = document.querySelector('.board-body');
      if (cards.length > 0 && board) {
        highlightWaffleCards(cards);
        board.addEventListener('DOMNodeInserted', checkDOMUpdate);
      } else {
        onload();
      }
    }, 1000);
  }

  // Iterates over the cards and determines how a card should be highlight.
  function highlightWaffleCards(cards) {
    setTimeout(function(){
      var cardsArray = Array.prototype.slice.call(cards);
      Array.prototype.forEach.call(cardsArray, function(card) {
        var sourceNameElement = card.querySelector('.source-name');
        if (sourceNameElement) {
          var sourceName = sourceNameElement.innerHTML;
          if (developerRepoNames.indexOf(sourceName) >= 0) {
            card.classList.add('developer-item');
          } else {
            card.classList.add('design-item');
          }
        }
      });
    }, 500);
  }

  // Everytime an element is added to the board element this function checks 
  // its a card and calls highlightWaffleCards if it is.
  function checkDOMUpdate(e) {
    var newElement = e.target;
    if (newElement.classList && newElement.classList.contains('card')) {
      highlightWaffleCards([newElement]);
    }
  }
  onload();
})();

