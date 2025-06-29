function activateDarkMode() {
  /* ========================================= */
  /* SVG COLOR CHANGE                          */
  /* ========================================= */

  const newIcons =
    "https://gist.githubusercontent.com/Joaooh/bd3b9ecf436bc547393cb09d64fac787/raw/3ed04e6743262ead677c9c16d2195d1707b4f3ba/academico-v2.svg";

  document.querySelectorAll("[style]").forEach((el) => {
    if (el.style.backgroundImage.includes("icons/icons.svg")) {
      el.style.backgroundImage = `url("${newIcons}")`;
    }
  });

  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (
          rule.style &&
          rule.style.backgroundImage &&
          rule.style.backgroundImage.includes("icons/icons.svg")
        ) {
          rule.style.backgroundImage = `url("${newIcons}")`;
        }
      }
    } catch (e) {}
  }

  /* ========================================= */
  /* SWITCHERY & HOMEPAGE STAR ICON COLOR FIX  */
  /* ========================================= */

  function fixSwitcheryColor() {
    document.querySelectorAll(".switchery").forEach((switchery) => {
      const input = switchery.previousElementSibling;
      if (!input) return;

      const activeColor = "#9c2279";
      const inactiveColor = "#666";

      const isChecked = input.checked;

      const colorToUse = activeColor;

      if (isChecked) {
        switchery.style.setProperty(
          "background-color",
          colorToUse,
          "important"
        );
        switchery.style.setProperty("border-color", colorToUse, "important");
        switchery.style.setProperty(
          "box-shadow",
          `${colorToUse} 0px 0px 0px 11px inset`,
          "important"
        );
      } else {
        switchery.style.setProperty(
          "background-color",
          inactiveColor,
          "important"
        );
        switchery.style.setProperty("border-color", inactiveColor, "important");
        switchery.style.setProperty(
          "box-shadow",
          `${inactiveColor} 0px 0px 0px 0px inset`,
          "important"
        );
      }
    });
  }

  fixSwitcheryColor();

  const switcheryObserver = new MutationObserver(() => {
    fixSwitcheryColor();
  });

  switcheryObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  setInterval(fixSwitcheryColor, 100);

  document.querySelectorAll(".fa.fa-star").forEach((el) => {
    const isExcluded = el.closest("h5")?.textContent.includes("Participação %");
    if (!isExcluded) {
      el.style.setProperty("color", "#9c2279", "important");
    }
  });

  /* ========================================= */
  /* "VER EVENTO" BUTTON COLOR FIX (CALENDAR)  */
  /* ========================================= */

  const el = document.getElementById("evento-link");
  if (el) {
    el.style.setProperty("background-color", "#9c2279", "important");
    el.style.setProperty("border-color", "#9c2279", "important");
  }

  /* ========================================= */
  /* KEEPS ACTIVE SEMESTER/FOLDER ICONS FIXED  */
  /* ========================================= */

  function fixActiveFolderIcons() {
    const activeOriginalColor = "rgb(67, 5, 78)";
    const primaryColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim() || "#9c2279";

    function fixIconColor(icon) {
      if (!icon?.style) return;
      if (icon.style.color.trim() === activeOriginalColor) {
        icon.style.setProperty("color", primaryColor, "important");
      }
    }

    function scanAndFixAll() {
      document
        .querySelectorAll(
          ".folder-list a i.fa-filter, " +
            ".folder-list a i.fa-folder, " +
            ".folder-list a i.fa-inbox, " +
            ".folder-list a i.fa-newspaper-o, " +
            ".folder-list a i.fa-send, " +
            ".folder-list a i.fa-trash-o"
        )
        .forEach(fixIconColor);
    }

    scanAndFixAll();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          fixIconColor(mutation.target);
        } else if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              if (
                node.matches(
                  "i.fa-filter, i.fa-folder, i.fa-inbox, i.fa-newspaper-o, i.fa-send, i.fa-trash-o"
                )
              ) {
                fixIconColor(node);
              } else {
                node
                  .querySelectorAll(
                    "i.fa-filter, i.fa-folder, i.fa-inbox, i.fa-newspaper-o, i.fa-send, i.fa-trash-o"
                  )
                  .forEach(fixIconColor);
              }
            }
          });
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    setInterval(scanAndFixAll, 5000);
  }

  /* ========================================= */
  /* "MENSAGENS (CAIXA DE ENTRADA)" COLOR FIX  */
  /* ========================================= */

  function fixBorderLeftColor(node) {
    if (node.nodeType !== 1) return;

    if (node.matches("tr[data-mensagem]")) {
      const targetTd = node.querySelector('td[style*="border-left"]');
      if (targetTd) {
        targetTd.style.setProperty(
          "border-left",
          "2px solid var(--primary)",
          "important"
        );
      }
    }

    if (
      node.matches('td[style*="border-left"]') &&
      (node.classList.contains("col-lg-12") || node.closest(".mail-box"))
    ) {
      node.style.setProperty(
        "border-left",
        "2px solid var(--primary)",
        "important"
      );
    }
  }

  document.querySelectorAll("tr[data-mensagem]").forEach(fixBorderLeftColor);
  document
    .querySelectorAll('td[style*="border-left"]')
    .forEach(fixBorderLeftColor);

  const borderObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          fixBorderLeftColor(node);
          if (node.querySelectorAll) {
            node
              .querySelectorAll("tr[data-mensagem], td[style*='border-left']")
              .forEach(fixBorderLeftColor);
          }
        });
      }
    }
  });

  borderObserver.observe(document.body, { childList: true, subtree: true });

  /* ========================================= */
  /* "DISCIPLINAS (MF: --)" & "MENÇÃO FINAL"   */
  /* ========================================= */

  function fixMentionPlaceholder() {
    document
      .querySelectorAll("td.col-lg-1.col-md-1.visible-lg.visible-md span b")
      .forEach((bTag) => {
        if (bTag.textContent.trim() === "--") {
          bTag.style.color = "var(--white-primary)";
        }
      });
  }

  function fixMentionFinalColor() {
    document
      .querySelectorAll("div.col-lg-3.b-r.text-center h1 b")
      .forEach((bTag) => {
        if (bTag.textContent.trim() === "--") {
          bTag.style.color = "var(--white-primary)";
        }
      });
  }

  /* ========================================= */
  /* ADD FOOTER CREDITS                        */
  /* ========================================= */

  function addExtensionCreditsOnce() {
    if (document.querySelector("#extension-credits")) return;

    const footer = document.querySelector(".footer > div:last-child");
    if (footer) {
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
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addExtensionCreditsOnce);
  } else {
    addExtensionCreditsOnce();
  }

  const footerObserver = new MutationObserver(() => addExtensionCreditsOnce());
  footerObserver.observe(document.body, { childList: true, subtree: true });

  /* ========================================= */
  /* RUN ALL FIXES TOGETHER                    */
  /* ========================================= */

  function runDynamicFixes() {
    fixSwitcheryColor();
    fixActiveFolderIcons();
    fixMentionPlaceholder();
    fixMentionFinalColor();
    addExtensionCreditsOnce();
  }

  runDynamicFixes();

  /* ========================================= */
  /* "MATRÍCULA ON-LINE" COLOR FIX             */
  /* ========================================= */

  document
    .querySelectorAll(
      ".modal-content > .modal-body.text-center > h1.text-primary"
    )
    .forEach((h1) => {
      h1.style.setProperty("color", "var(--primary)", "important");
    });

  /* ========================================= */
  /* "CARTEIRA ESTUDANTIL" BUTTON COLOR FIX    */
  /* ========================================= */

  function fixAndamentoButton() {
    const andamentoBtn = document.getElementById("btn-andamento-0");
    if (andamentoBtn) {
      andamentoBtn.style.setProperty("color", "#f1f1f1", "important");
    }
  }

  fixAndamentoButton();

  const andamentoObserver = new MutationObserver(() => {
    fixAndamentoButton();
  });

  andamentoObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"],
  });

  setInterval(fixAndamentoButton, 3000);

  /* MINOR ICON COLOR FIX */
  document.querySelectorAll(".fa.fa-expand").forEach((icon) => {
    icon.style.color = "var(--white-primary)";
  });

  /* MINOR COLOR FIX (ul) */
  document.querySelectorAll(".folder-list li a").forEach((el) => {
    el.style.setProperty("color", "var(--white-primary)", "important");
  });

  /* MINOR COLOR FIX (Disciplina -> Marcar Todos) */
  document.querySelectorAll("a#marcar-turma-alunos").forEach((el) => {
    el.style.setProperty("color", "var(--white-primary)", "important");
  });
}

function deactivateDarkMode() {
  window.location.reload();
}

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "enable") {
    activateDarkMode();
  } else if (message.action === "disable") {
    deactivateDarkMode();
  }
});

(async () => {
  const { isEnabled } = await browser.storage.local.get("isEnabled");
  if (isEnabled) {
    activateDarkMode();
  }
})();