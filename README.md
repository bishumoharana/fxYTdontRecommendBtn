# fxYTdontRecommendBtn

---

# YouTube Don't Recommend Channel Button Extension

A Firefox extension that adds a custom "Don't Recommend Channel" button to YouTube video cards, making it easier to block unwanted channels from your recommendations.

---

## Features

- Adds a 🚫 button to every YouTube video card (homepage, search results, recommendations).
- Clicking the button mimics the "Don't Recommend Channel" action from YouTube’s three-dot menu.
- Works seamlessly with YouTube’s dynamic content loading (infinite scroll).

---

## Installation

### Prerequisites
- Firefox browser.

### Steps
1. **Download the Extension**:
   - Clone this repository or download the ZIP file.
   ```
   git clone https://github.com/your-username/youtube-dont-recommend-button.git
   ```

2. **Load the Extension in Firefox**:
   - Open Firefox and go to `about:debugging`.
   - Click **"This Firefox"** in the sidebar.
   - Click **"Load Temporary Add-on"**.
   - Select the `manifest.json` file from the downloaded repository.

3. **Use the Extension**:
   - Go to YouTube and browse videos.
   - You’ll see a 🚫 button next to the three-dot menu (`⋮`) on each video card.
   - Click the button to block the channel from your recommendations.

---

## How It Works

The extension injects a custom button into YouTube’s video cards using a **content script**. When clicked, it:
1. Opens the three-dot menu (`⋮`) programmatically.
2. Clicks the "Don't Recommend Channel" option in the menu.

The extension uses a **MutationObserver** to handle YouTube’s dynamic content loading (e.g., infinite scroll).

---

## Files

- **`manifest.json`**: Metadata and permissions for the extension.
- **`content.js`**: Injects the custom button and handles the click event.
- **`styles.css`**: Styles for the custom button.
- **`README.md`**: This file.

---

## Contributing

Contributions are welcome! Here’s how you can help:

1. **Report Issues**:
   - If you find a bug or have a feature request, open an issue on GitHub.

2. **Submit Pull Requests**:
   - Fork the repository.
   - Make your changes.
   - Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Inspired by YouTube’s native "Don't Recommend Channel" feature.
- Built using the [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions).

---

## Screenshots

![Example of the custom button on a YouTube video card](screenshot.png)

---

Let me know if you’d like to add or modify anything in the README! 🚀
