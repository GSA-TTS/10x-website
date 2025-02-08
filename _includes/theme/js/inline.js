(function () {
  //Update Aria-label of able video players
  document.addEventListener("DOMContentLoaded", function(event) { 
    setTimeout(function(){ 
      const ablePlayers = document.querySelectorAll('.able-wrapper .able-player');

      if (ablePlayers.length > 0) {
        ablePlayers.forEach((player, index) => {
          player.setAttribute('aria-label', `Video player ${index + 1}`);
        });
      }
    }, 3000);
  });
})();
