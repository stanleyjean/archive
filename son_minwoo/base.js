let player;
      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '170',
          width: '250',
          playerVars: {
            listType: 'playlist',
            list: 'PLKP7E0KzYTnSE4O8Cy_yGRbDFkO-WgfcD'
          }
        });
      }

window.onload = function() {
// Get all <a> elements on the page
const links = document.querySelectorAll('a');

// Loop through the links and add the rel and target attributes
links.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('target', '_blank');
});
};



