let player;
      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '170',
          width: '250',
          playerVars: {
            listType: 'playlist',
            list: 'OLAK5uy_nvt6iZM6sZT17hpihSCQwIJXD0wPQ0Cyw'
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

// Get references to the iframe and body paragraph elements
const iframe = document.querySelector("#playlist");
const paragraph = document.querySelector("p");

// Function to check if two elements intersect
function intersect(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}