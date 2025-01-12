function addCustomButton(card) {
  if (card.querySelector('.custom-dont-recommend')) return;

  const customButton = document.createElement('button');
  customButton.className = 'custom-dont-recommend';
  customButton.innerHTML = '🚫';
  customButton.title = "Don't recommend channel";

  customButton.addEventListener('click', (event) => {
    event.stopPropagation();

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

  const threeDotMenu = card.querySelector('button[aria-label="More actions"], button[aria-label="Action menu"]');
  if (threeDotMenu) {
    threeDotMenu.insertAdjacentElement('beforebegin', customButton);
  } else {
    const fallbackContainer = card.querySelector('#menu, .ytd-menu-renderer, ytd-menu-renderer');
    if (fallbackContainer) {
      fallbackContainer.prepend(customButton);
    }
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