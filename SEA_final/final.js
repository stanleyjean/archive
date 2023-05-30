window.onload = function() {
    // Get all <a> elements on the page
    const links = document.querySelectorAll('a.newtab');
    
    // Loop through the links and add the rel and target attributes
    links.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
    });
    };