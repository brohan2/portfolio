import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-lg p-8 mb-12 overflow-hidden" id="hero">
        {/* Rotating Stars Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <svg className="absolute animate-spin-slow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <circle cx="300" cy="300" r="290" stroke="#888" strokeDasharray="2 30" strokeWidth="1" />
              <circle cx="300" cy="300" r="220" stroke="#bbb" strokeDasharray="1 20" strokeWidth="1" />
              <circle cx="300" cy="300" r="150" stroke="#ccc" strokeDasharray="1 12" strokeWidth="1" />
              <circle cx="300" cy="300" r="80" stroke="#eee" strokeDasharray="1 8" strokeWidth="1" />
              {/* Star dots */}
              <circle cx="300" cy="20" r="2" fill="#fff" />
              <circle cx="580" cy="300" r="1.5" fill="#fff" />
              <circle cx="300" cy="580" r="2" fill="#fff" />
              <circle cx="20" cy="300" r="1.5" fill="#fff" />
              <circle cx="450" cy="100" r="1.2" fill="#fff" />
              <circle cx="150" cy="500" r="1.2" fill="#fff" />
              <circle cx="500" cy="450" r="1.2" fill="#fff" />
              <circle cx="100" cy="150" r="1.2" fill="#fff" />
            </g>
          </svg>
        </div>
        {/* Decorative Web SVG or Icon */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#6366f1" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M50 2v96M2 50h96M20 20l60 60M80 20L20 80" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="flex-shrink-0 z-10">
          <Image
            src="/rohanimage.jpeg"
            alt="Rohan Boddupally"
            width={180}
            height={180}
            className="rounded-full border-4 border-indigo-200 shadow-xl object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left z-10">
          <h1 className="text-5xl font-extrabold mb-2 text-gray-900 drop-shadow-lg animate-fade-in">Boddupally Rohan</h1>
          <p className="text-xl text-gray-700 mb-2 animate-fade-in delay-100 font-mono">Crafting code, building dreams — Full Stack Developer</p>
          <p className="text-lg italic text-gray-800 mb-8 animate-fade-in delay-200">
            I'm Spiderman, cuz I create web and all 🕸️
          </p>
          <a
            href="#projects"
            className="inline-block bg-white text-gray-900 px-8 py-2 rounded-full shadow border border-gray-800 hover:border-gray-900 hover:shadow-lg transition-all duration-200 text-base font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-gray-300 animate-fade-in delay-300"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-24">
        <h1 className="text-4xl mb-12 text-center font-extrabold">About Me</h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 justify-items-center mb-10">
          {/* Card 1: Backend Systems */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-50 via-white to-gray-200 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🖥️</span>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Backend Systems</h2>
            <p className="text-gray-700">Scalable server solutions</p>
          </div>
          {/* Card 2: API Development */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-50 via-white to-gray-200 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🔗</span>
            <h2 className="text-xl font-bold mb-2 text-gray-900">API Development</h2>
            <p className="text-gray-700">Crafting robust RESTful APIs and seamless third-party service integrations</p>
          </div>
          {/* Card 3: Database Design */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-50 via-white to-gray-200 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🗄️</span>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Database Design</h2>
            <p className="text-gray-700">SQL & NoSQL databases</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Card 4: AI Integrations */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-50 via-white to-gray-200 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🤖</span>
            <h2 className="text-xl font-bold mb-2 text-gray-900">AI Integrations</h2>
            <p className="text-gray-700">Implementing cutting-edge AI solutions with LLMs, Computer Vision, and ML models</p>
          </div>
          {/* Card 5: System Design */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-50 via-white to-gray-200 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🧩</span>
            <h2 className="text-xl font-bold mb-2 text-gray-900">System Design</h2>
            <p className="text-gray-700">Architecture & Infrastructure</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="max-w-5xl mx-auto py-24">
        <h1 className="text-4xl mb-12 text-center font-extrabold">Technologies I Worked On</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-0 gap-y-0 justify-center place-content-center max-w-none">
          {/* Java */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/java.svg" alt="Java" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">Java</span>
          </div>
          {/* Python */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/python.svg" alt="Python" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">Python</span>
          </div>
          {/* SQL */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/sql.svg" alt="SQL" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">SQL</span>
          </div>
          {/* MongoDB */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/mongodb.svg" alt="MongoDB" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">MongoDB</span>
          </div>
          {/* Express.js */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/express.svg" alt="Express.js" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">Express.js</span>
          </div>
          {/* Node.js */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/nodejs.svg" alt="Node.js" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">Node.js</span>
          </div>
          {/* React */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/react.svg" alt="React" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">React</span>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/nextJs.svg" alt="Next.js" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">Next.js</span>
          </div>
          {/* AWS Cloud */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/aws.svg" alt="AWS Cloud" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">AWS Cloud</span>
          </div>
          {/* Vercel */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/vercel.svg" alt="Vercel" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">Vercel</span>
          </div>
          {/* GCP */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/gcp.svg" alt="GCP" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">GCP</span>
          </div>
          {/* OpenAI */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-none shadow p-0 w-16">
            <div className="flex items-center justify-center w-10 h-10 rounded-none bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
              <img src="/tech/openai.svg" alt="OpenAI" width={20} height={20} />
            </div>
            <span className="font-semibold text-xs text-white">OpenAI</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-10">Experience</h1>
        <ol className="relative border-l-2 border-gray-200">
          <li className="mb-12 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white">
              <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            </span>
            <h2 className="text-2xl font-semibold text-gray-900">MINFY TECHNOLOGY</h2>
            <span className="block text-gray-600 text-sm mb-2">Apr 2025 – Present | Intern - AWS, Docker, MERN stack</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Undergone intensive training in Cloud Technologies, MERN stack development and successfully worked on Liphi, a real-time collaborative tool for documentation.</li>
            </ul>
          </li>
          <li className="mb-12 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white">
              <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            </span>
            <h2 className="text-2xl font-semibold text-gray-900">REALPAGE</h2>
            <span className="block text-gray-600 text-sm mb-2">Nov 2024 – Apr 2025 | Intern - NodeJs, ExpressJs, MongoDB, Java, Selenium</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Established a connection with MongoDB using Mongoose and built efficient RESTful APIs with Node.js and Express.js to ensure seamless data retrieval and optimized performance of the CMDB system.</li>
              <li>Automated 50+ test scripts, significantly reducing time consumption and enhancing efficiency in validating dashboard functionality of OpsTechnology.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Education</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Geethanjali College of Engineering and Technology</h2>
          <p className="text-gray-700">B.Tech in Computer Science - AIML<br/>Grad. 2021-2025 | CGPA: 7.8</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Narayana Junior College</h2>
          <p className="text-gray-700">MPC with Senior Secondary<br/>Grad. 2020 | Cum. Per: 82%</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-3xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Multiplayer Chess</h2>
            <p className="text-gray-700 mb-2">Developed a real-time multiplayer chess game using Node.js, Express, and Socket.io for seamless communication. Implemented drag-and-drop piece movement with logic to validate legal moves based on chess rules. Enabled support for more than two users by assigning extra players as spectators with live game view.</p>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm">NodeJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">ExpressJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">Sockets</span>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Meme Uploader</h2>
            <p className="text-gray-700 mb-2">Developed a user-friendly web platform to upload, view, and share memes using React, Node.js, and MongoDB. Integrated image upload functionality with ImageKit Storage, supporting real-time updates and user-specific feeds. Implemented authentication (JWT/Firebase Auth) and meme moderation features to ensure content safety and user engagement.</p>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm">ReactJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">NodeJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">ExpressJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">MongoDB</span>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Liphi Documentation</h2>
            <p className="text-gray-700 mb-2">Integrated Firebase Authentication for secure user login and access control. Used BlockNote for rich text editing with block-level formatting and markdown support. Implemented real-time sync and conflict resolution using Yjs and Y-Sweet CRDT framework.</p>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm">ReactJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">Firebase</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">ExpressJs</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">Socket.io</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm ml-2">YJS</span>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Achievements</h1>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Global Rank 4473 in TCS CodeVita, showcasing strong coding skills.</li>
          <li>2-star at CodeChef</li>
          <li>3-star problem solving at HackerRank</li>
          <li>Java Programming Certification from ORACLE Academy</li>
          <li>Python Certification from HackerRank.</li>
        </ul>
      </section>

      {/* Position of Responsibility Section */}
      <section id="responsibility" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Position of Responsibility</h1>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Core organiser of YES+! (Youth Empowerment and Skills) workshop with 1600+ participants at GCET.</li>
          <li>Led Yoga Session at the ID (Irrigation Department) of Telangana on International Yoga Day, receiving a Token of Gratitude for promoting wellness and health.</li>
          <li>Volunteered for the Personality Development Program at NIFT.</li>
          <li>Organized Technical Event “Horcrux Hunt” during the college festival Bhaswara.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Contact</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" id="name" name="name" type="text" required />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" id="email" name="email" type="email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2" id="message" name="message" rows={4} required />
          </div>
          <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">Send</button>
        </form>
      </section>
    </div>
  );
}
