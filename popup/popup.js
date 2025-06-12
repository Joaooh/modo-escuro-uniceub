document.addEventListener("DOMContentLoaded", async () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const bodyElement = document.body;

  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const targetPage = "https://ea.uniceub.br/";

  // Disable popup if not on target page
  if (!tab.url.startsWith(targetPage)) {
    bodyElement.classList.add("disabled-popup");
    return;
  }

  // Set toggle state based on storage
  const { isEnabled } = await browser.storage.local.get("isEnabled");
  darkModeToggle.checked = isEnabled;

  // Add event listener to toggle
  darkModeToggle.addEventListener("change", async () => {
    browser.runtime.sendMessage({ action: "toggle", tab: tab });
  });
});