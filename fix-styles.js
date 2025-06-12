function fixAllInlineStyles() {
  const problematicButtons = document.querySelectorAll(
    'button[id^="btn-andamento-"][style*="color:black!important"]'
  );
  problematicButtons.forEach((button) => {
    button.style.setProperty("color", "#ffffff", "important");
  });

  const problematicTabs = document.querySelectorAll(
    'a[data-toggle="tab"][style*="color"]'
  );
  problematicTabs.forEach((tab) => {
    tab.style.setProperty("color", "#ffffff", "important");
  });

  const problematicBorders = document.querySelectorAll(
    '[style*="border-left:2px solid #43054e !important"]'
  );
  problematicBorders.forEach((element) => {
    element.style.setProperty("border-left-color", "#9c2279", "important");
  });

  const problematicTitle = document.querySelector(
    'h1.text-primary[style*="color:#43054e"]'
  );
  if (problematicTitle) {
    problematicTitle.style.setProperty("color", "#9c2279", "important");
  }

  const problematicSwitches = document.querySelectorAll(
    '.switchery[style*="background-color: rgb(67, 5, 78)"]'
  );
  problematicSwitches.forEach((element) => {
    element.style.setProperty("background-color", "#9c2279", "important");
    element.style.setProperty("border-color", "#9c2279", "important");
    element.style.setProperty(
      "box-shadow",
      "#9c2279 0px 0px 0px 11px inset",
      "important"
    );
  });

  const problematicStars = document.querySelectorAll(
    'i.fa-star[style*="color:#43054e"]'
  );
  problematicStars.forEach((star) => {
    star.style.setProperty("color", "#9c2279", "important");
  });

  // Restore original colors for notes and absences
  const coloredNotes = document.querySelectorAll(
    '.ibox-content b[style*="color: #60B044"], ' +
      '.ibox-content b[style*="color: #FF0000"], ' +
      '.ibox-content snap[style*="color: #60B044"], ' +
      '.ibox-content span[style*="color: #60B044"], ' +
      '.ibox-content span[style*="color: #FF0000"]'
  );
  coloredNotes.forEach((element) => {
    const originalColor = element.style.color;
    if (originalColor) {
      element.style.setProperty("color", originalColor, "important");
    }
  });

  // Make hyphens (originally black) white in dark mode
  const blackHyphensB = document.querySelectorAll(
    '.ibox-content b[style*="color: #000000"], ' +
      ".ibox-content table.issue-tracker b:not([style])"
  );
  blackHyphensB.forEach((element) => {
    element.style.setProperty("color", "#e0e0e0", "important");
  });

  const blackHyphensSpan = document.querySelectorAll(
    '.ibox-content span[style*="color: #000000"] b'
  );
  blackHyphensSpan.forEach((element) => {
    element.style.setProperty("color", "#e0e0e0", "important");
  });

  const desktopLabelTexts = document.querySelectorAll(
    ".ibox-content td.col-lg-1.visible-lg.visible-md, " +
      ".ibox-content td.col-lg-3.visible-lg.visible-md"
  );
  desktopLabelTexts.forEach((element) => {
    const textContent = element.textContent;
    if (
      textContent.includes("F:") ||
      textContent.includes("MP:") ||
      textContent.includes("MF:")
    ) {
      element.style.setProperty("color", "#e0e0e0", "important");
    }
  });

  const mobileLabelTexts = document.querySelectorAll(
    ".ibox-content .visible-sm.visible-xs p small"
  );
  mobileLabelTexts.forEach((element) => {
    const textContent = element.textContent;
    if (
      textContent.includes("Faltas:") ||
      textContent.includes("Menções Parciais:") ||
      textContent.includes("Menção Final:")
    ) {
      element.style.setProperty("color", "#e0e0e0", "important");
    }
  });
}

// Control flag to ensure credits are added only once
let creditsAdded = false;

function addExtensionCreditsOnce() {
  if (creditsAdded) {
    return;
  }

  const copyrightElement = document.querySelector(".footer > div:last-child");

  if (copyrightElement) {
    if (!copyrightElement.querySelector("#extension-credits")) {
      const creditsSpan = document.createElement("span");
      creditsSpan.id = "extension-credits";
      creditsSpan.style.color = "#e0e0e0";
      creditsSpan.textContent = "Modo Escuro por João G. Torres ";

      const githubLink = document.createElement("a");
      githubLink.href = "https://github.com/Joaooh/modo-escuro-uniceub";
      githubLink.target = "_blank";
      githubLink.style.setProperty("color", "#8cb4ff", "important");
      githubLink.style.textDecoration = "none";
      githubLink.textContent = "(GitHub)";

      creditsSpan.appendChild(githubLink);
      const separatorText = document.createTextNode(" | ");
      copyrightElement.appendChild(separatorText);
      copyrightElement.appendChild(creditsSpan);

      creditsAdded = true;
    }
  }
}

// Execution and Observation Logic
document.addEventListener("DOMContentLoaded", () => {
  fixAllInlineStyles();
  addExtensionCreditsOnce();
});

const observer = new MutationObserver((mutations) => {
  let shouldRunFixStyles = false;
  let shouldTryAddCredits = false;

  for (const mutation of mutations) {
    if (
      (mutation.type === "childList" && mutation.addedNodes.length > 0) ||
      mutation.type === "attributes"
    ) {
      shouldRunFixStyles = true;
      if (!creditsAdded) {
        shouldTryAddCredits = true;
      }
    }
  }

  if (shouldRunFixStyles) {
    fixAllInlineStyles();
  }
  if (shouldTryAddCredits) {
    addExtensionCreditsOnce();
  }
});

// Start observing the document body
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["style", "class"],
});