function addCustomButton(card) {
    if (card.querySelector('.custom-dont-recommend')) return;
  
    const customButton = document.createElement('button');
    customButton.className = 'custom-dont-recommend';
    customButton.innerHTML = '🚫';
    customButton.title = "Don't recommend channel";
  
    customButton.addEventListener('click', (event) => {
      event.stopPropagation();
  
      // Find the three-dot menu button
      const threeDotMenu = card.querySelector('button[aria-label="More actions"], button[aria-label="Action menu"]');
      if (threeDotMenu) {
        threeDotMenu.click(); // Open the three-dot menu
  
        // Observe the DOM for changes to detect when the menu opens
        const observer = new MutationObserver((mutations, obs) => {
          const dontRecommendOption = Array.from(document.querySelectorAll('yt-formatted-string')).find(el => el.innerText.includes("Don't recommend channel"));
          if (dontRecommendOption) {
            dontRecommendOption.click();
            obs.disconnect(); // Stop observing after the action is complete
          }
        });
  
        // Start observing the document for changes
        observer.observe(document.body, { childList: true, subtree: true });
      }
    });
  
    // Append the button to the card's action area
    const actionArea = card.querySelector('#menu, #button');
    if (actionArea) {
      actionArea.prepend(customButton);
    }
  }
  
  function scanPage() {
    const videoCards = document.querySelectorAll('ytd-video-renderer, ytd-rich-item-renderer');
    videoCards.forEach(card => {
      addCustomButton(card);
    });
  }
  
  scanPage();
  new MutationObserver(scanPage).observe(document.body, { childList: true, subtree: true });