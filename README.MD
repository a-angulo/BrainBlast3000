# 🧠 BrainBlast 3000 – Full-Stack Quiz App with Testing Superpowers ⚡️  
**BrainBlast 3000** is a tech quiz app designed to challenge your knowledge — and back it up with **full-stack testing** using **Cypress**. Built with React, TypeScript, Node.js, Express, and MongoDB, this app not only quizzes users but also tests itself, so your logic stays sharp and bug-free.  
![license-badge](https://img.shields.io/badge/license-MIT-blue.svg)  
🔗 **Live Demo:** [https://brainblast3000.onrender.com](https://brainblast3000.onrender.com)  

## 📚 Table of Contents  
- 📝 [Description](#-description)  
- 💾 [Installation](#-installation)  
- 🚀 [Usage](#-usage)  
- 🧪 [Testing](#-testing)  
- 🤝 [Contributing](#-contributing)  
- 📄 [License](#-license)  
- ✨ [Features](#-features)  
- 🙌 [Credits](#-credits)  

## 📝 Description  
BrainBlast 3000 is your interactive, timed tech quiz app built with the MERN stack, featuring full support for:  
- Modern TypeScript-powered React UI  
- Vite frontend bundling  
- A Node/Express backend API  
- MongoDB for persistent question data  
- **Cypress component and E2E tests** to validate app behavior  

Built for both users *and* devs, this app aims to provide a smooth experience from UI to CI/CD.  

## 💾 Installation  
1. Clone the repo:  
```bash
git clone https://github.com/a-angulo/BrainBlast3000.git
cd BrainBlast3000
```  

2. Install all dependencies for both client and server:  
```bash
npm install
```  

3. Set up your environment:  
```bash
cp .env.example .env
# Then edit .env and add:
# MONGODB_URI=your-mongo-uri
# PORT=3001
```  

4. Seed the database:  
```bash
npm run seed
```  

## 🚀 Usage  

### Development mode  
```bash
npm run start:dev
```  
- Client: http://localhost:3000  
- Server API: http://localhost:3001/api  

### Production build (Render)  
```bash
npm run start
```  

This command builds both client and server and serves the static frontend with Express.  

## 🧪 Testing  

### Open Cypress GUI  
```bash
npm run test
```  

### Run component tests headlessly  
```bash
npm run test:component
```  

### Run E2E tests headlessly  
```bash
npm run test:e2e
```  

### Test File Structure  
```
/cypress
├── component
│   └── Quiz.cy.jsx       # Unit test for <Quiz />
├── e2e
│   └── quiz.cy.js        # Full quiz user flow test
├── fixtures
│   └── questions.json    # Static mock data for questions
```  

## 🤝 Contributing  
Want to improve BrainBlast 3000?  

1. Fork this repo  
2. Create a feature branch:  
```bash
git checkout -b feature/your-feature-name
```  
3. Commit your changes  
4. Push and open a PR  

We welcome all improvements and test expansions!  

## 📄 License  
This project is licensed under the **MIT License**.  
You’re free to use, modify, and distribute — just keep credit intact.  

## ✨ Features  
- ⚛️ React + Vite frontend  
- 🌐 Express.js RESTful backend  
- 🧠 MongoDB-powered question storage  
- 🧪 Cypress testing suite  
- 💅 TypeScript typed throughout  
- 🚀 One-command deploy support  
- 🔁 Dev hot-reload via `concurrently`  
- 🧩 Component and E2E test isolation  

## 🙌 Credits  
- ⚡ **BrainBlast 3000** – the app that turns trivia into tech triumph  
- 🧪 **Cypress** – for testing every click  
- 💻 **MERN stack** – the solid backbone  
- 🤖 **ChatGPT** – for README generation and dev support  
- 🎓 **Xpert Learning** – for full-stack education done right  

> Built with 💥 and `npm test` by the **BrainBlast Squad**
Paste this whole block into your README.md in VSCode and you're g