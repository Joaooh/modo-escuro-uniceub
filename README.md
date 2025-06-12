# 🌓 UniCEUB Dark Mode

A Firefox browser extension that applies a **custom dark mode** to the **UniCEUB university website**. Ideal for studying or browsing at night or for long periods without straining your eyes.

> ⚠️ This extension does not alter the functionality of the page — only its visual style.

---

## 📷 Preview

| Before | After (with dark mode) |
|--------|------------------------|
| ![Before](screenshots/before.png) | ![After](screenshots/after.png) |

---

## ✨ Features

- Changes background, text, and main element colors of UniCEUB
- Maintains contrast and accessibility
- Automatically activates on university pages
- Lightweight: CSS injected dynamically
- No external dependencies

---

## 🔧 How to install (developer mode)

### Firefox

1. Download this repository:
   ```bash
   git clone https://github.com/Joaooh/modo-escuro-uniceub.git
   ```
2. Go to `about:debugging#/runtime/this-firefox` in the browser
3. Click **"Load Temporary Add-on..."**
4. Select the `manifest.json` file from the project folder

> The extension will be removed when Firefox is closed. For permanent use, you can repackage it or wait for a possible future release on the Mozilla Add-ons store (no guarantees).

---

## 🗂 Project Structure

```
modo-escuro-uniceub/
├── manifest.json         # Configures the extension, permissions, and scripts.
├── background.js         # Main background script. Handles CSS injection and icon redirection.
├── fix-styles.js         # Content script to fix hard-coded inline styles with JavaScript.
├── styles/
│   └── dark-mode.css     # The main stylesheet that applies the dark theme.
├── popup/
│   ├── popup.html        # The HTML for the popup window.
│   ├── popup.css         # The CSS for styling the popup.
│   └── popup.js          # The JavaScript that controls the popup's logic.
└── icons/                # Extension icons for the toolbar and store listing.
```

---

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript
- WebExtensions API (Firefox)

---

## 📌 Compatibility

| Browser  | Compatible |
|----------|------------|
| Firefox  | ✅ Fully compatible |
| Chrome   | 🚧 Adaptable with `manifest.json` changes |
| Edge     | ❌ Not tested |

---

## 🧪 Contributing

Suggestions for improvements, new styles, or bug reports are welcome. Just open an [Issue](https://github.com/Joaooh/modo-escuro-uniceub/issues) or submit a [Pull Request](https://github.com/Joaooh/modo-escuro-uniceub/pulls).

---

## 📄 License

Distributed under the **MIT** license. See `LICENSE` for more information.