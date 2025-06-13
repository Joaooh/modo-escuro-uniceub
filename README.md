<p align="left">
  <a href="#🇧🇷-versão-em-português">🇧🇷 Versão em Português</a>
</p>

# 🌓 UniCEUB Dark Mode

A browser extension that applies a **custom dark mode** to the **UniCEUB university website**. Ideal for browsing without straining your eyes.

> ⚠️ This extension does not alter the functionality of the page — only its visual style.

---

## 📷 Preview

| Before | After (with Dark Mode) |
|--------|------------------------|
| <img src="screenshots/login-screen-before.png" width="400" alt="Original login screen"> | <img src="screenshots/login-screen-after.png" width="400" alt="Dark login screen"> |
| <img src="screenshots/homepage-before.png" width="400" alt="Original homepage"> | <img src="screenshots/homepage-after.png" width="400" alt="Dark homepage"> |
| <img src="screenshots/subjects-before.png" width="400" alt="Original subjects page"> | <img src="screenshots/subjects-after.png" width="400" alt="Dark subjects page"> |

---

## ✨ Features

- Changes background, text, and main element colors of UniCEUB
- Maintains contrast and accessibility
- Automatically activates on university pages
- Lightweight: CSS injected dynamically

---

## 🚀 How to Install

You can install the extension using the following methods, depending on your browser:

### 🦊 For Mozilla Firefox

1.  Download the latest `firefox.zip` file directly from the project's [Releases](https://github.com/Joaooh/modo-escuro-uniceub/releases) page.
2.  Unzip the file you just downloaded.
3.  Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
4.  Click **"Load Temporary Add-on..."**
5.  Select the `manifest.json` file from the extension folder.

> The extension will be active until Firefox is closed.<br>
> For permanent use, wait for a possible future release on the Mozilla Add-ons store.

### 🌐 For Google Chrome / Microsoft Edge

1.  Download the latest `chromium.zip` file directly from the project's [Releases](https://github.com/Joaooh/modo-escuro-uniceub/releases) page.
2.  Unzip the file you just downloaded.
3.  Open Chrome/Edge and navigate to the extensions page (e.g., `chrome://extensions`).
4.  Ensure "**Developer mode**" is enabled.
4.  Click **"Load unpacked"** and select the extension's folder (`chrome`).

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
| Chrome   | ✅ Fully compatible |
| Edge     | ✅ Fully compatible |

---

## 🧪 Contributing

Suggestions for improvements, new styles, or bug reports are welcome. Just open an [Issue](https://github.com/Joaooh/modo-escuro-uniceub/issues) or submit a [Pull Request](https://github.com/Joaooh/modo-escuro-uniceub/pulls).

---

## 📄 License

Distributed under the **MIT** license. See `LICENSE` for more information.

---

## 🇧🇷 Versão em Português

# 🌓 Modo Escuro UniCEUB

Uma extensão de navegador que aplica um **modo escuro personalizado** ao site da **universidade UniCEUB**. Ideal para navegar sem cansar os olhos.

> ⚠️ Esta extensão não altera a funcionalidade da página — apenas seu estilo visual.

---

## 📷 Prévia

| Antes | Depois (com Modo Escuro) |
|--------|--------------------------|
| <img src="screenshots/login-screen-before.png" width="400" alt="Tela de login original"> | <img src="screenshots/login-screen-after.png" width="400" alt="Tela de login escura"> |
| <img src="screenshots/homepage-before.png" width="400" alt="Página inicial original"> | <img src="screenshots/homepage-after.png" width="400" alt="Página inicial escura"> |
| <img src="screenshots/subjects-before.png" width="400" alt="Página de disciplinas original"> | <img src="screenshots/subjects-after.png" width="400" alt="Página de disciplinas escura"> |

---

## ✨ Funcionalidades

- Altera cores de fundo, texto e elementos principais do UniCEUB
- Mantém contraste e acessibilidade
- Ativado automaticamente nas páginas da universidade
- Leve: CSS injetado dinamicamente

---

## 🚀 Como Instalar

Você pode instalar a extensão usando os métodos abaixo, dependendo do navegador:

### 🦊 Para Mozilla Firefox

1. Baixe o arquivo `firefox.zip` mais recente na página de [Releases](https://github.com/Joaooh/modo-escuro-uniceub/releases) do projeto.
2. Extraia o arquivo baixado.
3. No Firefox, vá para `about:debugging#/runtime/this-firefox`.
4. Clique em **"Carregar extensão temporária..."**
5. Selecione o arquivo `manifest.json` da pasta da extensão.

> A extensão ficará ativa até o Firefox ser fechado.<br>
> Para uso permanente, aguarde uma possível futura publicação na loja de Add-ons da Mozilla.

### 🌐 Para Google Chrome / Microsoft Edge

1. Baixe o arquivo `chromium.zip` mais recente na página de [Releases](https://github.com/Joaooh/modo-escuro-uniceub/releases) do projeto.
2. Extraia o arquivo baixado.
3. No Chrome/Edge, vá até a página de extensões (por exemplo, `chrome://extensions`).
4. Certifique-se de que o "**Modo do desenvolvedor**" está ativado.
5. Clique em **"Carregar sem compactação"** e selecione a pasta da extensão (`chrome`).

---

## 🗂 Estrutura do Projeto

```
modo-escuro-uniceub/
├── manifest.json         # Configura a extensão, permissões e scripts.
├── background.js         # Script de fundo principal. Gerencia injeção de CSS e redirecionamento de ícones.
├── fix-styles.js         # Script que corrige estilos inline definidos diretamente via JavaScript.
├── styles/
│ └── dark-mode.css       # Estilos principais do tema escuro.
├── popup/
│ ├── popup.html          # HTML do popup.
│ ├── popup.css           # Estilo do popup.
│ └── popup.js            # Lógica do popup em JavaScript.
└── icons/                # Ícones da extensão para barra de ferramentas e loja.
```

---

## 🛠 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- WebExtensions API (Firefox)

---

## 📌 Compatibilidade

| Navegador | Compatível        |
|-----------|-------------------|
| Firefox   | ✅ Totalmente compatível |
| Chrome    | ✅ Totalmente compatível |
| Edge      | ✅ Totalmente compatível |

---

## 🧪 Contribuições

Sugestões de melhorias, novos estilos ou relatórios de bugs são bem-vindos. Basta abrir uma [Issue](https://github.com/Joaooh/modo-escuro-uniceub/issues) ou enviar um [Pull Request](https://github.com/Joaooh/modo-escuro-uniceub/pulls).

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais informações.