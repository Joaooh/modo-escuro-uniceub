document.addEventListener("DOMContentLoaded", async () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const bodyElement = document.body;

  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  const targetPage = "https://ea.uniceub.br/";

  if (!tab.url.startsWith(targetPage)) {
    bodyElement.classList.add("disabled-popup");
    return;
  }

  const { isEnabled } = await browser.storage.local.get("isEnabled");
  darkModeToggle.checked = isEnabled;

  darkModeToggle.addEventListener("change", async () => {
    browser.runtime.sendMessage({ action: "toggle", tab: tab });
  });
});