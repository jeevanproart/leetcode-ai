<div align="center">

# 🧠 LeetCode Whisper — Chrome Companion

AI-powered hints, explanations, and code reviews directly inside every LeetCode problem.

</div>

---

## ✨ What the Extension Does

- **Embedded AI panel**: A floating chat box appears on any `leetcode.com/problems/*` page so you never have to leave the editor.
- **Multi-model Gemini support**: Toggle between Gemini 2.5 Flash/Pro and Gemini 1.5 Flash/Pro depending on speed vs. depth.
- **Context aware replies**: We automatically scrape your current problem statement, detected language, and in-editor code before calling Gemini.
- **Conversation history**: Q&A history is persisted per problem in IndexedDB so you can reload a tab without losing progress.
- **Chrome storage sync**: Your selected model plus API key live in `chrome.storage.local`, configurable from the popup UI.
- **Privacy first**: Nothing is sent anywhere unless you hit “Ask”; all data flows directly from your browser to Google’s Gemini API via your key.

---

## 🧱 Tech Stack

- **React + TypeScript + Vite** for the popup UI and content script
- **Tailwind / Shadcn UI** components for styling
- **Chrome Extension Manifest V3**
- **`@ai-sdk/google`** for Gemini requests
- **IndexedDB + custom hook** for chat persistence

---

## 🔧 Prerequisites

| Requirement | Notes |
|-------------|-------|
| Node.js ≥ 18 | Recommend using `nvm` |
| pnpm ≥ 9    | Project is pinned to pnpm |
| Gemini API Key | Create from https://aistudio.google.com/app/apikey |

---

## 🚀 Getting Started (Developer)

```bash
# 1. Install deps
pnpm install

# 2. Build production assets to dist/
pnpm build

# 3. (Optional) Type-check & lint
pnpm run typecheck
pnpm run lint
```

> Development servers (`pnpm dev`) are not used because Chrome extensions rely on the built `dist/` bundle.

---

## 🧩 Load the Extension in Chrome

1. Run `pnpm build` to populate the `dist/` folder.
2. Open `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the project’s `dist/` directory.
5. Pin “LeetCode Whisper” to your toolbar for quick access.

Whenever you change code, rebuild (`pnpm build`) and click “Reload” on the extension card.

---

## 🔐 Configure Your Gemini API Key

1. Click the extension icon to open the popup.
2. Choose one of the four Gemini models:
   - Gemini 2.5 Flash (default)
   - Gemini 2.5 Pro
   - Gemini 1.5 Pro
   - Gemini 1.5 Flash
3. Paste your Gemini API key.
4. Hit “Save API Key”.

Keys are stored locally in `chrome.storage.local` and never leave your machine except when requests are sent directly to Google.

---

## 💬 Using the In-Page Assistant

1. Open any LeetCode problem statement.
2. Look for the floating “bot” button in the bottom-right corner.
3. Click it to expand the chat panel.
4. Type your question — the extension will automatically capture:
   - Problem description
   - Detected programming language
   - Your current code (taken from Monaco editor DOM)
5. Responses can include hints, step-by-step plans, and runnable code snippets.
6. Previous exchanges can be revisited via the scrollable history (lazy-loaded via IndexedDB).

If no API key is configured, the panel will prompt you to open the popup and set one.

---

## 📁 Project Structure (Highlights)

```
src/
├── App.tsx                 # Popup UI
├── content/
│   └── content.tsx         # In-page assistant + chat logic
├── modals/                 # Gemini model adapters
│   ├── modal/              # Concrete Gemini implementations
│   └── index.ts            # Registry + factory
├── hooks/                  # Chrome storage & IndexedDB helpers
├── lib/indexedDB.ts        # Persistence layer
├── constants/              # Prompts, model map, etc.
└── services/ModalService.ts# Orchestrates AI calls
```

---

## 🧪 Testing & Validation

While there is no automated test suite yet, you can manually verify:

1. **Popup** loads, allows selecting/saving keys, and disables input when no model is set.
2. **Content script** injects correctly and the chat panel toggles open/closed.
3. **API calls** succeed after pasting a valid Gemini key (check DevTools → Console for errors).
4. **Chat history** persists after page refresh (IndexedDB DevTools → Application tab).

---

## 🐞 Troubleshooting

| Issue | Fix |
|-------|-----|
| “Ask AI” button missing | Ensure you’re on a `leetcode.com/problems/*` URL and rebuilt `dist/`. |
| Model errors (`model not found`) | Switch to a supported model (Gemini 2.5 Flash/Pro). |
| No response / stuck spinner | Check Chrome DevTools console for network errors; verify API key quota. |
| Popup shows blank | Reload the extension after rebuilding. |

---

## 🤝 Contributing

1. Fork + clone
2. Create a feature branch
3. Run `pnpm build` before pushing to ensure bundles compile
4. Open a PR describing:
   - Feature / fix summary
   - Screenshots or recordings (if UI)
   - Any testing performed

---

## 📜 License

This project is distributed under the MIT License. See `LICENSE` for details (or add one if missing).

---

Happy grinding — may every LeetCode problem come with a gentle whisper of guidance! 🧡
