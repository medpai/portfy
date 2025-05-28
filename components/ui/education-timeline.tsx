import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function EducationTimeline() {
  const data = [
    {
      title: "2023-2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            <span className="text-lg font-semibold text-purple-400">Computer Programming DEC</span>
          </p>
          
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            Currently completing a DEC in Computer Programming at La Cité College.
            Focusing on full-stack development, data structures, and software engineering principles.
          </p>
          <div className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(124,_58,_237,_0.25)] border border-purple-500/20 hover:shadow-[0_0_40px_rgba(124,_58,_237,_0.35)] transition-all duration-300">
            <div className="relative w-full h-60 md:h-80 lg:h-96">
              <Image 
                src="/la-cite_campus.jpg" 
                alt="La Cité College Campus" 
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white text-base md:text-xl font-medium">La Cité College</h3>
                <p className="text-sm text-gray-300 mt-1">Ottawa, Ontario</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-purple-500/30 text-purple-200 text-xs px-2 py-1 rounded">Web Development</span>
                  <span className="bg-blue-500/30 text-blue-200 text-xs px-2 py-1 rounded">Software Development</span>
                  <span className="bg-cyan-500/30 text-cyan-200 text-xs px-2 py-1 rounded">Database Management</span>
                  <span className="bg-indigo-500/30 text-indigo-200 text-xs px-2 py-1 rounded">C#, Java, Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            <span className="text-lg font-semibold text-purple-400">DESS in Computer Science</span>
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            Completed a DESS (Diplôme d&apos;Études Supérieures Spécialisées) in Computer Science at Ibn Tofail University.
            Focused on advanced computing concepts, software engineering, and information systems.
          </p>
          <div className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(124,_58,_237,_0.25)] border border-purple-500/20 hover:shadow-[0_0_40px_rgba(124,_58,_237,_0.35)] transition-all duration-300">
            <div className="relative w-full h-60 md:h-80 lg:h-96">
              <Image 
                src="/uit.jpg" 
                alt="Ibn Tofail University Campus" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white text-base md:text-xl font-medium">Ibn Tofail University</h3>
                <p className="text-sm text-gray-300 mt-1">Kenitra, Morocco</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-purple-500/30 text-purple-200 text-xs px-2 py-1 rounded">Computer Science</span>
                  <span className="bg-blue-500/30 text-blue-200 text-xs px-2 py-1 rounded">Software Engineering</span>
                  <span className="bg-cyan-500/30 text-cyan-200 text-xs px-2 py-1 rounded">Information Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Continuous Learning",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            <span className="text-lg font-semibold text-purple-400">Self-Study & Certifications</span>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            Constantly expanding my knowledge through online courses, tutorials, and hands-on projects.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Web Development with React and Next.js
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Full-Stack Development
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Modern UI/UX Design Principles
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Database Management
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Cloud Computing & Deployment
            </div>
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-300">
            <span className="text-lg font-semibold text-purple-400">Certifications</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {/* Generative AI */}
            <div className="h-auto w-full rounded-xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 flex flex-col items-center justify-start shadow-[0_0_24px_rgba(124,_58,_237,_0.15)] hover:shadow-[0_0_30px_rgba(124,_58,_237,_0.25)] transition-all duration-300">
              <a href="/GenAiCertif.jpg" target="_blank" rel="noopener noreferrer" className="block w-full mb-3">
                <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg">
                  <Image 
                    src="/GenAiCertif.jpg" 
                    alt="Generative AI Certification" 
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </a>
              <div className="text-center w-full">
                <h3 className="text-purple-300 text-base md:text-lg font-semibold">Generative AI</h3>
                <p className="text-xs text-neutral-400 mt-1 mb-2">Microsoft & LinkedIn</p>
                <a
                  href="/GenAiCertif.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-xs transition-colors duration-200"
                >
                  View Full Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Data Analysis */}
            <div className="h-auto w-full rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-4 flex flex-col items-center justify-start shadow-[0_0_24px_rgba(56,_189,_248,_0.15)] hover:shadow-[0_0_30px_rgba(56,_189,_248,_0.25)] transition-all duration-300">
              <a href="/DataAnalysis.jpg" target="_blank" rel="noopener noreferrer" className="block w-full mb-3">
                <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg">
                  <Image 
                    src="/DataAnalysis.jpg" 
                    alt="Data Analysis Certification" 
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </a>
              <div className="text-center w-full">
                <h3 className="text-blue-300 text-base md:text-lg font-semibold">Data Analysis</h3>
                <p className="text-xs text-neutral-400 mt-1 mb-2">Microsoft & LinkedIn</p>
                <a
                  href="/DataAnalysis.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs transition-colors duration-200"
                >
                  View Full Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Azure AI */}
            <div className="h-auto w-full rounded-xl bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-4 flex flex-col items-center justify-start shadow-[0_0_24px_rgba(79,_70,_229,_0.15)] hover:shadow-[0_0_30px_rgba(79,_70,_229,_0.25)] transition-all duration-300">
              <a href="/AzureAi.jpg" target="_blank" rel="noopener noreferrer" className="block w-full mb-3">
                <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg">
                  <Image 
                    src="/AzureAi.jpg" 
                    alt="Azure AI Certification" 
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </a>
              <div className="text-center w-full">
                <h3 className="text-cyan-300 text-base md:text-lg font-semibold">Azure AI</h3>
                <p className="text-xs text-neutral-400 mt-1 mb-2">Microsoft</p>
                <a
                  href="/AzureAi.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs transition-colors duration-200"
                >
                  View Full Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Docker */}
            <div className="h-auto w-full rounded-xl bg-gradient-to-r from-indigo-900/30 to-green-900/30 p-4 flex flex-col items-center justify-start shadow-[0_0_24px_rgba(52,_211,_153,_0.15)] hover:shadow-[0_0_30px_rgba(52,_211,_153,_0.25)] transition-all duration-300">
              <a href="/dockerCertif.jpg" target="_blank" rel="noopener noreferrer" className="block w-full mb-3">
                <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg">
                  <Image 
                    src="/dockerCertif.jpg" 
                    alt="Docker Certification" 
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </a>
              <div className="text-center w-full">
                <h3 className="text-green-300 text-base md:text-lg font-semibold">Docker</h3>
                <p className="text-xs text-neutral-400 mt-1 mb-2">Container Technology</p>
                <a
                  href="/dockerCertif.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-xs transition-colors duration-200"
                >
                  View Full Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="education">
      <Timeline data={data} />
    </div>
  );
}
