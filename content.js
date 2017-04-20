(function(){

  var checkExist = setInterval(function() {
    if (document.querySelectorAll('.card').length) {
      console.log("Waffle Strips highlighted");
      clearInterval(checkExist);
      addStrips();
    }
  }, 100); // check every 100ms

  var addStrips = function(){

    // grab all cards on the board & convert to an array
    var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));

    // Loop cards and add the class '.work-item' to tickets from repos listed
    cards.forEach(function (card) {
      var sourceName = card.querySelectorAll('.source-name')[0].innerHTML;

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

      var highlightDevCard = function() {
        card.classList.add("developer-item");
      };

      var highlightDesignCard = function() {
        card.classList.add("design-item");
      };

      if (developerRepoNames.indexOf(sourceName) >= 0) {
        highlightDevCard();
      }

      if (developerRepoNames.indexOf(sourceName) === -1) {
        highlightDesignCard();
      }
    });
  };
})();
