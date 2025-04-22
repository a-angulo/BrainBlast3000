# 🧪 BrainBlast 3000 – Testing Suite ⚡️  
**BrainBlast** — Your ultimate tech quiz app!  
---

![license-badge](https://img.shields.io/badge/license-MIT-blue.svg)

🔗 **Live Site:** [https://brainblast3000.onrender.com](https://brainblast3000.onrender.com)

---

## 📚 Table of Contents  
- 📝 [Description](#-description)  
- 💾 [Installation](#-installation)  
- 🚀 [Usage](#-usage)  
- 🤝 [How to Contribute](#-how-to-contribute)  
- 🧪 [Tests](#-tests)  
- 📄 [License](#-license)  
- ✨ [Features](#-features)  
- 🙌 [Credits](#-credits)  

---

## 📝 Description  
Welcome to **BrainBlast ⚡️**, a full-stack tech quiz app built with the MERN stack.  
This test suite uses **Cypress** to perform both **component** and **end-to-end** testing, ensuring the quiz flow works like a charm — no logic errors, no regressions, no nonsense.

---

## 💾 Installation   
---
## 💾 Installation  
Install dependencies and prepare the structure:  
`npm install`  
`npm install cypress --save-dev`  
Make sure your directory looks like this:  
`/cypress`  
`├── /component`  
`│   └── Quiz.cy.jsx`  
`├── /e2e`  
`│   └── quiz.cy.js`  
`├── /fixtures`  
`│   └── questions.json`  
And don’t forget to rename your env file:  
`.env.example → .env`  
## 🚀 Usage  
To run the app and tests:  
`npm run dev       # to launch BrainBlast`  
`npm run test      # to open Cypress`  
Then choose your test:  
- `Quiz.cy.jsx` → for isolated Quiz component tests  
- `quiz.cy.js` → for full quiz flow testing  
## 🤝 How to Contribute  
Got a better zap? We love improvements:  
- Fork the repo  
- Create a new branch  
- Add new tests or fix bugs  
- Open a PR and tag us 🔍  
## 🧪 Tests  
📁 `cypress/component/Quiz.cy.jsx`  
- Renders the `<Quiz />` component  
- Mocks a set of questions  
- Simulates user answering  
- Verifies score update logic  
📁 `cypress/e2e/quiz.cy.js`  
- Simulates full user flow  
- Clicks start button  
- Answers 10 questions  
- Verifies the final score page  
- Restarts the quiz cleanly  
📁 `cypress/fixtures/questions.json`  
- Mock question data for repeatable and fast tests  
## 📄 License  
This project is covered under the **MIT License** — share it, remix it, enhance it, just give credit where it’s due ⚖️  
## ✨ Features  
- 🔍 Real-world simulation testing  
- 🧱 Component isolation testing  
- ⚡ E2E coverage from start to score  
- 💾 Consistent mock data via fixtures  
- 🌐 Seamless testing with Cypress UI  
- 🛡️ Prevents regression bugs  
- 🚀 Ensures production readiness  
## 🙌 Credits  
- ⚡ **BrainBlast** – the app that brings your tech knowledge to the test  
- 🧪 **Cypress** – for powering the testing magic  
- 💻 **MongoDB, Express, React, Node.js** – the brains behind the blast  
- 🤖 **ChatGPT** – for README generation and dev mojo  
- 🎓 **Xpert Learning** – for hand-holding me through the code like a true MVP 🙌