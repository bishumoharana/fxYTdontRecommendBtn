// Function to add the "Don't Recommend Channel" button
function addCustomButton(card) {
  if (card.querySelector('.custom-dont-recommend')) return;

  const customButton = document.createElement('button');
  customButton.className = 'custom-dont-recommend';
  customButton.innerHTML = '🚫';
  customButton.title = "Don't recommend channel";

  customButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop event propagation
    event.preventDefault(); // Prevent default behavior

    const threeDotMenu = card.querySelector('button[aria-label="More actions"], button[aria-label="Action menu"]');
    if (threeDotMenu) {
      threeDotMenu.click();

      setTimeout(() => {
        const dontRecommendOption = Array.from(document.querySelectorAll('yt-formatted-string')).find(el => el.innerText.includes("Don't recommend channel"));
        if (dontRecommendOption) {
          dontRecommendOption.click();
        }
      }, 500);
    }
  });

  // Find the three-dot menu container
  const threeDotMenuContainer = card.querySelector('#menu, .ytd-menu-renderer, ytd-menu-renderer');
  if (threeDotMenuContainer) {
    // Insert the button below the three-dot menu
    threeDotMenuContainer.parentNode.insertBefore(customButton, threeDotMenuContainer.nextSibling);
  }
}

// Function to add the "Not Interested" button
function addNotInterestedButton(card) {
  if (card.querySelector('.custom-not-interested')) return;

  const notInterestedButton = document.createElement('button');
  notInterestedButton.className = 'custom-not-interested';
  notInterestedButton.innerHTML = '❌';
  notInterestedButton.title = "Not Interested";

  notInterestedButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop event propagation
    event.preventDefault(); // Prevent default behavior

    const threeDotMenu = card.querySelector('button[aria-label="More actions"], button[aria-label="Action menu"]');
    if (threeDotMenu) {
      threeDotMenu.click();

      const observer = new MutationObserver((mutations, obs) => {
        const notInterestedOption = Array.from(document.querySelectorAll('yt-formatted-string')).find(el => el.innerText.includes("Not interested"));
        if (notInterestedOption) {
          notInterestedOption.click();
          obs.disconnect(); // Stop observing after the action is complete
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }
  });

  // Find the channel icon/avatar container
  const channelIconContainer = card.querySelector('#avatar-link, ytd-channel-name #avatar');
  if (channelIconContainer) {
    // Insert the button below the channel icon
    channelIconContainer.parentNode.insertBefore(notInterestedButton, channelIconContainer.nextSibling);
  }
}

// Function to scan the page for video cards and add the buttons
function scanPage() {
  const videoCards = document.querySelectorAll('ytd-video-renderer, ytd-rich-item-renderer');
  videoCards.forEach(card => {
    addCustomButton(card); // Add the "Don't Recommend Channel" button
    addNotInterestedButton(card); // Add the "Not Interested" button
  });
}

// Run the scan when the page loads and when new content is loaded
scanPage();
new MutationObserver(scanPage).observe(document.body, { childList: true, subtree: true });