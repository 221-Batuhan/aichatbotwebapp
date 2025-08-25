# AI Chatbot Web App

A modern, responsive AI chatbot web application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Real-time chat interface with AI assistant
- Modern, responsive design
- TypeScript for type safety
- Tailwind CSS for styling
- OpenAI integration for intelligent responses
- Clean, comment-free codebase

## Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd myaichatbotwebapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/project-root
  /public
  /src
    /components
      - Layout.tsx
      - Chat.tsx
    /pages
      - index.tsx
      - _app.tsx
      /api
        - chat.ts
    /styles
      - globals.css
  - package.json
  - next.config.js
  - tailwind.config.js
  - postcss.config.js
  - tsconfig.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- OpenAI API
- Lucide React (icons)

#Batuhan Açan - Full Stack Developer

