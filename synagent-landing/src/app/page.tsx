import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-xl font-semibold">SynAgent</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center px-6 text-center min-h-[50vh]">
        <h1 className="text-5xl font-extrabold mb-4">
          Your AI Assistant for Business Efficiency
        </h1>
        <p className="max-w-xl text-lg text-slate-300 mb-6">
          Launch your own AI agent to automate workflows, respond instantly, and stay productive.
        </p>
        <a
          href="#video"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
        >
          Watch Demo
        </a>
      </section>

      {/* Demo Video Section */}
      <section id="video" className="bg-slate-800 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">See SynAgent in Action</h3>
        <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            frameBorder="0"
            allowFullScreen
            title="SynAgent Demo"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2025 SynAgent. All rights reserved.
      </footer>
    </main>
  );
}
