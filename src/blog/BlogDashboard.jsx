import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, BookOpen, Home } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Helper to parse frontmatter and content from markdown string
const parseMarkdown = (filename, content) => {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = frontmatterRegex.exec(content);

  if (match) {
    const frontmatterBlock = match[1];
    const body = match[2];
    const metadata = {};

    frontmatterBlock.split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length > 1) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim();
        metadata[key] = value;
      }
    });

    if (metadata.tags) {
      metadata.tags = metadata.tags.split(',').map(t => t.trim());
    }

    return { ...metadata, body, slug: filename.split('/').pop().replace('.md', '') };
  }
  return { title: filename, body: content, slug: filename, tags: [] };
};

const BlogDashboard = () => {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Vite's import.meta.glob to load all markdown files from the current directory
    const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });
    const loadedPosts = [];

    for (const path in modules) {
      const content = modules[path];
      loadedPosts.push(parseMarkdown(path, content));
    }
    setPosts(loadedPosts);
  }, []);

  // Find the requested post
  const activePost = slug ? posts.find(p => p.slug === slug) : null;

  // --- Detail View ---
  if (activePost) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-200 p-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors inline-flex"
          >
            <ChevronLeft size={20} /> Back to Dashboard
          </Link>

          <article className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <header className="mb-8 border-b border-slate-700 pb-8">
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                {activePost.date && (
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {activePost.date}
                  </span>
                )}
                {activePost.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {activePost.readTime}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {activePost.title}
              </h1>
              {activePost.tags && (
                <div className="flex flex-wrap gap-2">
                  {activePost.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Markdown Rendering */}
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {activePost.body}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // --- List View ---
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <BookOpen className="text-blue-500" /> Blog Dashboard
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Manage and view your latest technical articles and insights.
            </p>
          </div>
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700">
            <Home size={18} /> Back to Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-1 shadow-lg block h-full leading-normal"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags && post.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 flex items-center gap-1 whitespace-nowrap ml-2">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-sm text-blue-400 font-medium mt-auto pt-4 border-t border-slate-700/50">
                  Read Article <ChevronLeft size={14} className="ml-1 rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDashboard;