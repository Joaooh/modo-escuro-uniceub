const targetPage = "https://ea.uniceub.br/";
const cssFile = "styles/dark-mode.css";

async function enableDarkMode(tabId) {
  try {
    await browser.scripting.insertCSS({
      target: { tabId: tabId },
      files: [cssFile],
    });
    await browser.storage.local.set({ isEnabled: true });
  } catch (err) {
    console.error(`Failed to inject CSS: ${err}`);
  }
}

async function disableDarkMode(tabId) {
  try {
    await browser.scripting.removeCSS({
      target: { tabId: tabId },
      files: [cssFile],
    });
    await browser.storage.local.set({ isEnabled: false });
  } catch (err) {
    console.error(`Failed to remove CSS: ${err}`);
  }
}

browser.runtime.onMessage.addListener(async (message) => {
  if (message.action === "toggle") {
    const { isEnabled } = await browser.storage.local.get("isEnabled");
    isEnabled
      ? await disableDarkMode(message.tab.id)
      : await enableDarkMode(message.tab.id);
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
      await enableDarkMode(tabId);
    }
  }
});

const MEU_ARQUIVO_DE_ICONES_SVG =
  "https://gist.githubusercontent.com/Joaooh/bd3b9ecf436bc547393cb09d64fac787/raw/3ed04e6743262ead677c9c16d2195d1707b4f3ba/academico-v2.svg";
const SVG_REDIRECT_RULE_ID = 1;

const svgRedirectRule = {
  id: SVG_REDIRECT_RULE_ID,
  priority: 1,
  action: {
    type: "redirect",
    redirect: { url: MEU_ARQUIVO_DE_ICONES_SVG },
  },
  condition: {
    urlFilter: "||ea.uniceub.br/Content/icons/icons.svg",
    resourceTypes: ["image", "xmlhttprequest", "other"],
  },
};

browser.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [SVG_REDIRECT_RULE_ID],
  addRules: [svgRedirectRule],
});