window.onload = function() {
    // Get all <a> elements on the page
    const links = document.querySelectorAll('a.newtab');
    
    // Loop through the links and add the rel and target attributes
    links.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
    });
    };

    $(document).ready(function() {
        var maxParagraphsToShow = 1; // Maximum number of paragraphs to show initially
        var maxContentLength = 200; // Maximum length of collapsed content in characters
      
        $('.section').each(function() {
          var section = $(this);
          var paragraphs = section.find('.paragraphs .text');
          var totalParagraphs = paragraphs.length;
      
          if (totalParagraphs > maxParagraphsToShow) {
            paragraphs.each(function(index) {
              if (index >= maxParagraphsToShow) {
                $(this).addClass('collapsed');
                $(this).hide();
              }
            });
      
            section.find('.readMoreBtn').show();
          }
      
          section.find('.readMoreBtn').click(function() {
            paragraphs.removeClass('collapsed');
            paragraphs.show();
            section.find('.readMoreBtn').hide();
            section.find('.readLessBtn').show();
          });
      
          section.find('.readLessBtn').click(function() {
            paragraphs.each(function(index) {
              if (index >= maxParagraphsToShow) {
                $(this).addClass('collapsed');
                $(this).hide();
              }
            });
            section.find('.readMoreBtn').show();
            section.find('.readLessBtn').hide();
      
            var scrollTarget = section.find('.readMoreBtn');
            var windowHeight = $(window).height();
            var targetOffset = scrollTarget.offset().top;
            var scrollOffset = targetOffset - (windowHeight / 2);
      
            $('html, body').animate({
              scrollTop: scrollOffset
            }, 500); // Adjust the duration of the scroll animation as needed
          });
        });
      });
    // var showMoreBtns = document.getElementsByClassName("showMoreBtn");
    // var showLessBtns = document.getElementsByClassName("showLessBtn");
    
    // for (var i = 0; i < showMoreBtns.length; i++) {
    //   showMoreBtns[i].addEventListener("click", function() {
    //     var parentDiv = this.parentNode;
    //     parentDiv.style.display = "block"; // Show the content
    //     this.style.display = "none"; // Hide the "Show More" button
    //     parentDiv.getElementsByClassName("showLessBtn")[0].style.display = "inline-block"; // Show the "Show Less" button
    //   });
    // }
    
    // for (var i = 0; i < showLessBtns.length; i++) {
    //   showLessBtns[i].addEventListener("click", function() {
    //     var parentDiv = this.parentNode;
    //     parentDiv.style.display = "none"; // Hide the content
    //     this.style.display = "none"; // Hide the "Show Less" button
    //     parentDiv.getElementsByClassName("showMoreBtn")[0].style.display = "inline-block"; // Show the "Show More" button
    //   });
    // }