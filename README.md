# Archit Sureja - Technical Portfolio

A modern, responsive, and interactive personal portfolio web application built to showcase professional experiences, skills, and projects in Software Engineering, Cloud Infrastructure, and AI Security.

## 🚀 Features

- **Interactive AI Recruiter Assistant**: An embedded chatbot powered by the **Gemini 2.5 Flash API**. It can intelligently answer questions about my work experience or evaluate job descriptions for a technical fit based on my resume.
- **Markdown-Based Blog**: A fully featured technical blog section that dynamically loads and natively renders markdown files (`react-markdown`, `remark-gfm`), including support for code blocks and Mermaid JS diagrams.
- **Responsive & Dynamic UI**: Built with a sleek dark-mode aesthetic utilizing Tailwind CSS for styling and dynamic scroll-triggered section highlights.
- **Modern Tech Stack**: Scaffolded with Vite and React 19 for blazingly fast development and builds.

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content Rendering**: `react-markdown`, `remark-gfm`, and `mermaid` for technical blog posts
- **AI Integration**: Custom prompt engineering with Google Gemini API integrations

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the AI Assistant:**
   To enable the Gemini AI assistant locally, you'll need a [Gemini API Key](https://aistudio.google.com/app/apikey).  
   Update the `apiKey` variable in `src/App.jsx` or provision it using a `.env` file (`VITE_GEMINI_API_KEY`).

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173/` in your browser.

## 📝 Customizing the Blog

New technical articles can be added natively as markdown files (`.md` extension) under the `src/blog/` directory. The `BlogDashboard.jsx` interface handles parsing and route creation.

## 🚢 Deployment

Generate an optimized production build:
```bash
npm run build
```
This application can be deployed cleanly to GitHub Pages, AWS Amplify, Netlify, or Vercel out of the box.

---

*Open to new opportunities in Cloud Infrastructure, Backend Engineering, and Security.*  
[Connect on LinkedIn](https://linkedin.com/in/architsureja) | [View on GitHub](https://github.com/architsureja)
