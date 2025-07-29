import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 rounded-2xl shadow-lg p-8 mb-12 overflow-hidden mt-20 snap-start" id="hero">
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
          <h1 className="text-5xl font-extrabold mb-2 text-gray-100 drop-shadow-lg animate-fade-in">Boddupally Rohan</h1>
          <p className="text-xl text-gray-300 mb-2 animate-fade-in delay-100 font-mono">Crafting code, building dreams — Full Stack Developer</p>
          <p className="text-lg italic text-gray-200 mb-8 animate-fade-in delay-200">
            I'm Spiderman, but my web is online 🕸️
          </p>
          <a
            href="#projects"
            className="inline-block bg-gray-900 text-gray-100 px-8 py-2 rounded-full shadow border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-200 text-base font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-gray-700 animate-fade-in delay-300"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-24 snap-start bg-gray-900 rounded-2xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl mb-12 text-center font-extrabold text-gray-100">About Me</h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 justify-items-center mb-10">
          {/* Card 1: Backend Systems */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🖥️</span>
            <h2 className="text-xl font-bold mb-2 text-gray-100">Backend Systems</h2>
            <p className="text-gray-300">Scalable server solutions</p>
          </div>
          {/* Card 2: API Development */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🔗</span>
            <h2 className="text-xl font-bold mb-2 text-gray-100">API Development</h2>
            <p className="text-gray-300">Crafting robust RESTful APIs and seamless third-party service integrations</p>
          </div>
          {/* Card 3: Database Design */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🗄️</span>
            <h2 className="text-xl font-bold mb-2 text-gray-100">Database Design</h2>
            <p className="text-gray-300">SQL & NoSQL databases</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Card 4: AI Integrations */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🤖</span>
            <h2 className="text-xl font-bold mb-2 text-gray-100">AI Integrations</h2>
            <p className="text-gray-300">Implementing cutting-edge AI solutions with LLMs, Computer Vision, and ML models</p>
          </div>
          {/* Card 5: System Design */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-xs hover:shadow-2xl transition-all">
            <span className="mb-4 text-4xl">🧩</span>
            <h2 className="text-xl font-bold mb-2 text-gray-100">System Design</h2>
            <p className="text-gray-300">Architecture & Infrastructure</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="max-w-5xl mx-auto py-24 snap-start bg-gray-900 rounded-2xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl mb-6 text-center font-extrabold text-gray-100">Technologies I Worked On</h1>
        <p className="text-center text-lg text-gray-400 mb-10">Here are some of the main technologies and tools I use to build modern, scalable applications.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Java */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/java.svg" alt="Java" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">Java</span>
          </div>
          {/* Python */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/python.svg" alt="Python" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">Python</span>
          </div>
          {/* SQL */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/sql.svg" alt="SQL" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">SQL</span>
          </div>
          {/* MongoDB */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/mongodb.svg" alt="MongoDB" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">MongoDB</span>
          </div>
          {/* Express.js */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/express.svg" alt="Express.js" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">Express.js</span>
          </div>
          {/* Node.js */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/nodejs.svg" alt="Node.js" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">Node.js</span>
          </div>
          {/* React */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/react.svg" alt="React" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">React</span>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/nextJs.svg" alt="Next.js" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">Next.js</span>
          </div>
          {/* AWS Cloud */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/aws.svg" alt="AWS Cloud" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">AWS Cloud</span>
          </div>
          {/* Vercel */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/vercel.svg" alt="Vercel" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">Vercel</span>
          </div>
          {/* GCP */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/gcp.svg" alt="GCP" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">GCP</span>
          </div>
          {/* OpenAI */}
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <img src="/tech/openai.svg" alt="OpenAI" width={40} height={40} className="mb-3 invert" />
            <span className="font-semibold text-gray-100">OpenAI</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-2xl mx-auto py-24 snap-start bg-gray-900 rounded-2xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl mb-10 text-center font-extrabold text-gray-100">Experience</h1>
        <ol className="relative border-l-4 border-indigo-700 ml-4">
          {/* Experience 1 */}
          <li className="mb-16 ml-8 group">
            <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-indigo-800 group-hover:bg-indigo-600 transition rounded-full ring-8 ring-gray-900 shadow-lg">
              <span className="w-4 h-4 bg-indigo-400 group-hover:bg-indigo-300 transition rounded-full"></span>
            </span>
            <div className="bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-100 mb-1">MINFY TECHNOLOGY</h2>
              <span className="block text-gray-300 text-sm mb-2">Apr 2025 – Present | Intern - AWS, Docker, MERN stack</span>
              <ul className="list-disc ml-6 text-gray-300 text-base space-y-1">
                <li>Undergone intensive training in Cloud Technologies, MERN stack development and successfully worked on Liphi, a real-time collaborative tool for documentation.</li>
              </ul>
            </div>
          </li>
          {/* Experience 2 */}
          <li className="ml-8 group">
            <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-indigo-800 group-hover:bg-indigo-600 transition rounded-full ring-8 ring-gray-900 shadow-lg">
              <span className="w-4 h-4 bg-indigo-400 group-hover:bg-indigo-300 transition rounded-full"></span>
            </span>
            <div className="bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-100 mb-1">REALPAGE</h2>
              <span className="block text-gray-300 text-sm mb-2">Nov 2024 – Apr 2025 | Intern - NodeJs, ExpressJs, MongoDB, Java, Selenium</span>
              <ul className="list-disc ml-6 text-gray-300 text-base space-y-1">
                <li>Established a connection with MongoDB using Mongoose and built efficient RESTful APIs with Node.js and Express.js to ensure seamless data retrieval and optimized performance of the CMDB system.</li>
                <li>Automated 50+ test scripts, significantly reducing time consumption and enhancing efficiency in validating dashboard functionality of OpsTechnology.</li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="max-w-2xl mx-auto py-24 snap-start bg-gray-900 rounded-2xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl mb-4 text-gray-100">Achievements</h1>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Global Rank 4473 in TCS CodeVita, showcasing strong coding skills.</li>
          <li>2-star at CodeChef</li>
          <li>3-star problem solving at HackerRank</li>
          <li>Java Programming Certification from ORACLE Academy</li>
          <li>Python Certification from HackerRank.</li>
        </ul>
      </section>

      <section id="responsibility" className="max-w-2xl mx-auto py-24 snap-start bg-gray-900 rounded-2xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl mb-4 text-gray-100">Position of Responsibility</h1>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Core organiser of YES+! (Youth Empowerment and Skills) workshop with 1600+ participants at GCET.</li>
          <li>Led Yoga Session at the ID (Irrigation Department) of Telangana on International Yoga Day, receiving a Token of Gratitude for promoting wellness and health.</li>
          <li>Volunteered for the Personality Development Program at NIFT.</li>
          <li>Organized Technical Event "Horcrux Hunt" during the college festival Bhaswara.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto py-24 snap-start bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl mb-4 text-gray-100">Contact</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-100" htmlFor="name">Name</label>
            <input className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="name" name="name" type="text" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-100" htmlFor="email">Email</label>
            <input className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="email" name="email" type="email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-100" htmlFor="message">Message</label>
            <textarea className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="message" name="message" rows={4} required />
          </div>
          <button type="submit" className="bg-gray-100 text-gray-900 px-6 py-2 rounded hover:bg-gray-300 transition font-semibold">Send</button>
        </form>
      </section>
    </div>
  );
}
