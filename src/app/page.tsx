import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10" id="hero">
        <div className="flex-shrink-0">
          <Image
            src="/rohanimage.jpeg"
            alt="Rohan Boddupally"
            width={180}
            height={180}
            className="rounded-full border-4 border-gray-200 shadow-lg object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Rohan Boddupally</h1>
          <p className="text-xl text-gray-700 mb-6 max-w-xl">
            Software Developer | Building elegant, impactful digital experiences. Passionate about web technologies, design, and innovation.
          </p>
          <a
            href="#projects"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded shadow hover:bg-gray-700 transition text-lg font-medium"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-4">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Hi! I’m Rohan Boddupally, a passionate developer focused on building impactful digital experiences. Welcome to my portfolio!
        </p>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Tech Stack</h1>
        <ul className="flex flex-wrap gap-4 text-lg text-gray-700">
          <li className="bg-gray-100 px-4 py-2 rounded">Next.js</li>
          <li className="bg-gray-100 px-4 py-2 rounded">React</li>
          <li className="bg-gray-100 px-4 py-2 rounded">TypeScript</li>
          <li className="bg-gray-100 px-4 py-2 rounded">Tailwind CSS</li>
          <li className="bg-gray-100 px-4 py-2 rounded">Node.js</li>
          <li className="bg-gray-100 px-4 py-2 rounded">HTML5</li>
          <li className="bg-gray-100 px-4 py-2 rounded">CSS3</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-2xl mx-auto py-24">
        <h1 className="text-4xl mb-10">Experience</h1>
        <ol className="relative border-l-2 border-gray-200">
          <li className="mb-12 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white">
              <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            </span>
            <h2 className="text-2xl font-semibold text-gray-900">Frontend Developer</h2>
            <span className="block text-gray-600 text-sm mb-2">Acme Corp &middot; Jan 2022 - Present</span>
            <p className="text-gray-700 mb-2">Developed and maintained web applications using React and Next.js. Collaborated with designers to deliver elegant user experiences.</p>
          </li>
          <li className="ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white">
              <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            </span>
            <h2 className="text-2xl font-semibold text-gray-900">Software Engineer Intern</h2>
            <span className="block text-gray-600 text-sm mb-2">Beta Solutions &middot; Jun 2021 - Dec 2021</span>
            <p className="text-gray-700 mb-2">Built internal tools and dashboards with TypeScript and Node.js. Improved team productivity by automating manual processes.</p>
          </li>
        </ol>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-3xl mx-auto py-24">
        <h1 className="text-4xl mb-4">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Example project card */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-700 mb-2">Short project description goes here.</p>
            <a href="#" className="text-blue-600 hover:underline">View Details</a>
          </div>
        </div>
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
