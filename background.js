const cssFile = "styles/dark-mode.css";
const targetPage = "https://ea.uniceub.br/";

async function enableDarkMode(tabId) {
  await browser.scripting.insertCSS({ target: { tabId }, files: [cssFile] });
  await browser.storage.local.set({ isEnabled: true });
  await browser.tabs.sendMessage(tabId, { action: "enable" });
}

async function disableDarkMode(tabId) {
  await browser.scripting.removeCSS({ target: { tabId }, files: [cssFile] });
  await browser.storage.local.set({ isEnabled: false });
  await browser.tabs.sendMessage(tabId, { action: "disable" });
}

browser.runtime.onMessage.addListener(async (message) => {
  if (message.action === "toggle") {
    const [tab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab && tab.url && tab.url.startsWith(targetPage)) {
      const { isEnabled } = await browser.storage.local.get("isEnabled");
      if (isEnabled) {
        await disableDarkMode(tab.id);
      } else {
        await enableDarkMode(tab.id);
      }
    }
  }
});

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.startsWith(targetPage)
  ) {
    const { isEnabled } = await browser.storage.local.get("isEnabled");
    if (isEnabled) {
      await browser.scripting.insertCSS({
        target: { tabId },
        files: [cssFile],
      });
    }
  }
});