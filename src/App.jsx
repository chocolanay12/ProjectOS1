import {
  FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaUser, FaGraduationCap,
  FaProjectDiagram, FaTools, FaMapMarkerAlt, FaCircle
} from "react-icons/fa";

import {
  FaReact, FaBootstrap, FaJsSquare, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaCuttlefish
} from "react-icons/fa";

import { SiTailwindcss, SiVite } from "react-icons/si";

export default function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "CPU Scheduling Simulator",
      description:
        "Interactive tool showcasing how CPU scheduling algorithms manage process execution inside the OS. Visualizes process selection, wait time, and CPU time distribution.",
      link: "https://cpu-scheduling-algorithms.netlify.app/",
      image: "/CPU Scheduling Simulators.PNG",
    },
    {
      id: 2,
      title: "E-commerce Shop",
      description:
        "An online shopping platform allowing customers to browse items, add to cart, and checkout securely with product listings, authentication, and order tracking.",
      link: "https://projectday.vercel.app/",
      image: "/E-commerce.png",
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "C#", icon: <FaCuttlefish className="text-blue-700" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <div className="bg-[#ebe6db] min-h-screen text-black font-mono">

      {/* ===== LEFT SIDEBAR ===== */}
      <aside className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl border-r border-black p-6 overflow-y-auto">
        <div className="flex flex-col items-center text-center">

          {/* Profile */}
          <img
            src="bj.jpg"
            alt="ahhburn"
            className="w-36 h-36 rounded-xl object-cover shadow-md border border-black"
          />

          <h1 className="mt-4 font-arial text-xl uppercase">
            Bern Justin Tajanlangit
          </h1>

          <p className="flex items-center gap-2 mt-2 text-sm">
            <FaMapMarkerAlt className="text-red-500" /> Calan Poblacion Cordova
          </p>

          <p className="text-sm font-semibold mt-1">BSIT Student</p>
        </div>

        <hr className="my-6 border-black" />

        {/* Sidebar Navigation */}
        <nav className="space-y-3 text-sm">
          {["about", "education", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-3 py-2 border border-black bg-yellow-200 shadow"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="ml-72 px-10 py-10 space-y-20">

        {/* ==== ABOUT ==== */}
        <section id="about" className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
            <FaUser className="text-blue-500" /> About Me
          </h2>
          <p className="leading-relaxed">
            I am passionate about IT and web development, with hands-on experience in HTML,
            CSS, and JavaScript. I love solving technical problems and understanding how
            systems work. I continuously improve through personal projects and aim to grow
            into an IT Support role.
          </p>
        </section>

        {/* ==== EDUCATION ==== */}
        <section id="education" className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-green-600" /> Education
          </h2>

          <div className="space-y-4">
            {[
              ["2023 — Present", "Cordova Public College"],
              ["2022 — 2023 Senior High", "Cordova National High School"],
              ["2018 — 2020 Junior High", "Cordova National High School"],
              ["2011 — 2017 Elementary", "Cordova Central Elementary School"],
            ].map(([year, school], i) => (
              <div key={i} className="flex gap-4 items-start">
                <FaCircle className="text-green-600 text-xs mt-1" />
                <div>
                  <p className="font-bold">{year}</p>
                  <p>{school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==== PROJECTS ==== */}
        <section id="projects" className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
            <FaProjectDiagram className="text-purple-500" /> Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="border border-black rounded-lg overflow-hidden bg-gray-50 shadow"
              >
                <img
                  src={item.image}
                  className="w-full h-40 object-cover border-b border-black"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.description}</p>

                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-block mt-3 px-4 py-1 bg-blue-300 border border-black shadow"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==== SKILLS ==== */}
        <section id="skills" className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
            <FaTools className="text-yellow-600" /> Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2 border border-black bg-yellow-100 shadow"
              >
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* ==== CONTACT ==== */}
        <section id="contact" className="bg-white p-8 rounded-xl border-2 border-black shadow-lg">
          <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
            <FaEnvelope className="text-blue-500" /> Contact
          </h2>

          <div className="grid gap-4">
            <a className="flex items-center gap-2 px-4 py-2 bg-blue-200 border border-black shadow"
              href="mailto:bernjustin08@gmail.com">
              <FaEnvelope /> Email
            </a>

            <a className="flex items-center gap-2 px-4 py-2 bg-green-200 border border-black shadow"
              href="tel:+639070772276">
              <FaPhone /> Phone
            </a>

            <a className="flex items-center gap-2 px-4 py-2 bg-blue-200 border border-black shadow"
              href="https://facebook.com/beejing08" target="_blank">
              <FaFacebook /> Facebook
            </a>

            <a className="flex items-center gap-2 px-4 py-2 bg-pink-200 border border-black shadow"
              href="https://instagram.com/bernjustin8" target="_blank">
              <FaInstagram /> Instagram
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
