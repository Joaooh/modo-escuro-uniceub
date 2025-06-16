function setupPeriodoFiltroIcons() {
  const filtroElements = document.querySelectorAll('a[id^="periodo_filtro_"]');

  if (filtroElements.length === 0) {
    return;
  }

  const updateIconColors = () => {
    filtroElements.forEach((element) => {
      const icon = element.querySelector("i.fa-filter");
      const textSpan = element.querySelector("span");

      if (!icon || !textSpan) {
        return;
      }

      const isSelected = textSpan.classList.contains("font-bold");
      const newColor = isSelected ? "#9c2279" : "#e0e0e0";

      icon.style.setProperty("color", newColor, "important");
    });
  };

  updateIconColors();

  filtroElements.forEach((element) => {
    element.addEventListener("click", () => {
      setTimeout(updateIconColors, 10);
    });
  });
}

function setupGradeFiltroIcons() {
  const filtroLinks = document.querySelectorAll('a.load[href*="/Academico/Disciplinas/Painel"]');

  if (filtroLinks.length === 0) {
    return;
  }

  const updateIconColors = () => {
    filtroLinks.forEach(link => {
      const icon = link.querySelector('i.fa-filter');
      if (!icon) return;

      const isSelected = link.style.fontWeight === 'bold';
      const newColor = isSelected ? '#9c2279' : '#e0e0e0';

      icon.style.setProperty('color', newColor, 'important');
    });
  };

  updateIconColors();

  filtroLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(updateIconColors, 10);
    });
  });
}

function fixAllInlineStyles() {
  const fixColor = (selector, expected) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    elements.forEach((el) => {
      if (el.style.color !== expected)
        el.style.setProperty("color", expected, "important");
    });
  };

  const fixBorderColor = (selector, expected) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    elements.forEach((el) => {
      el.style.setProperty("border-left-color", expected, "important");
    });
  };

  const fixBackground = (selector, bg, border, shadow) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    elements.forEach((el) => {
      el.style.setProperty("background-color", bg, "important");
      el.style.setProperty("border-color", border, "important");
      el.style.setProperty("box-shadow", shadow, "important");
    });
  };

  fixColor(
    'button[id^="btn-andamento-"][style*="color:black!important"]',
    "#ffffff"
  );
  fixColor('a[data-toggle="tab"][style*="color"]', "#ffffff");
  fixBorderColor(
    '[style*="border-left:2px solid #43054e !important"]',
    "#9c2279"
  );

  const title = document.querySelector(
    'h1.text-primary[style*="color:#43054e"]'
  );
  if (title && title.style.color !== "#9c2279") {
    title.style.setProperty("color", "#9c2279", "important");
  }

  fixBackground(
    '.switchery[style*="background-color: rgb(67, 5, 78)"]',
    "#9c2279",
    "#9c2279",
    "#9c2279 0px 0px 0px 11px inset"
  );

  fixColor('i.fa-star[style*="color:#43054e"]', "#9c2279");

  const restoreColors = document.querySelectorAll(
    '.ibox-content b[style*="color: #60B044"], ' +
      '.ibox-content b[style*="color: #FF0000"], ' +
      '.ibox-content snap[style*="color: #60B044"], ' +
      '.ibox-content span[style*="color: #60B044"], ' +
      '.ibox-content span[style*="color: #FF0000"]'
  );
  restoreColors.forEach((el) => {
    if (el.style.color) {
      el.style.setProperty("color", el.style.color, "important");
    }
  });

  fixColor(
    '.ibox-content b[style*="color: #000000"], .ibox-content table.issue-tracker b:not([style])',
    "#e0e0e0"
  );
  fixColor('.ibox-content span[style*="color: #000000"] b', "#e0e0e0");

  document
    .querySelectorAll(
      ".ibox-content td.col-lg-1.visible-lg.visible-md, .ibox-content td.col-lg-3.visible-lg.visible-md"
    )
    .forEach((el) => {
      const t = el.textContent;
      if (t.includes("F:") || t.includes("MP:") || t.includes("MF:")) {
        el.style.setProperty("color", "#e0e0e0", "important");
      }
    });

  document
    .querySelectorAll(".ibox-content .visible-sm.visible-xs p small")
    .forEach((el) => {
      const t = el.textContent;
      if (
        t.includes("Faltas:") ||
        t.includes("Menções Parciais:") ||
        t.includes("Menção Final:")
      ) {
        el.style.setProperty("color", "#e0e0e0", "important");
      }
    });

  fixColor('i.fa-expand[style*="color:#000"]', "#f0f0f0");
  setupPeriodoFiltroIcons();
  setupGradeFiltroIcons();
}

function setupSidebarIconColorsPersistent() {
  const andamento = document.getElementById("a-tipo-andamento");
  const inscrito = document.getElementById("a-tipo-inscrito");
  if (!andamento || !inscrito) return;

  const updateIcons = () => {
    const aIcon = andamento.querySelector("i.fa-filter");
    const iIcon = inscrito.querySelector("i.fa-filter");
    if (!aIcon || !iIcon) return;

    const selected =
      andamento.classList.contains("selected") ||
      andamento.getAttribute("aria-selected") === "true" ||
      andamento.style.fontWeight === "bold";

    aIcon.style.setProperty(
      "color",
      selected ? "#9c2279" : "#e0e0e0",
      "important"
    );
    iIcon.style.setProperty(
      "color",
      selected ? "#e0e0e0" : "#9c2279",
      "important"
    );
  };

  updateIcons();

  const folder = andamento.closest(".folder-list");
  if (!folder) return;

  const observer = new MutationObserver(updateIcons);
  observer.observe(folder, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });

  [andamento, inscrito].forEach((el) =>
    el.addEventListener("click", () => setTimeout(updateIcons, 100))
  );
}

let creditsAdded = false;

function addExtensionCreditsOnce() {
  if (creditsAdded) return;
  const footer = document.querySelector(".footer > div:last-child");
  if (footer && !footer.querySelector("#extension-credits")) {
    const span = document.createElement("span");
    span.id = "extension-credits";
    span.style.color = "#e0e0e0";
    span.textContent = "Modo Escuro por João G. Torres ";

    const link = document.createElement("a");
    link.href = "https://github.com/Joaooh/modo-escuro-uniceub";
    link.target = "_blank";
    link.style.setProperty("color", "#8cb4ff", "important");
    link.style.textDecoration = "none";
    link.textContent = "(GitHub)";

    span.appendChild(link);
    footer.append(" | ", span);
    creditsAdded = true;
  }
}

let debounceTimeout;
const debounceFixes = () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    fixAllInlineStyles();
    addExtensionCreditsOnce();
    setupSidebarIconColorsPersistent();
  }, 150);
};

browser.runtime.onMessage.addListener((message) => {
  if (message.ping) return true;
  if (message.action === "apply_fixes") debounceFixes();
});

document.addEventListener("DOMContentLoaded", debounceFixes);

const observer = new MutationObserver(debounceFixes);
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["style", "class"],
});