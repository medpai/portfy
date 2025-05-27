import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  techs?: string[];
  link?: string;
  github?: string;
}

const ProjectCard = ({ src, title, description, techs, link, github }: Props) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-purple-400/40 hover:bg-white/20">
      {/* Image Container - 16:9 aspect ratio */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay CTA */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg text-sm hover:scale-105 transition-transform">View Project</span>
          </a>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-5">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          {title}
        </h2>
        <p className="text-sm text-neutral-200 mb-3 min-h-[48px]">{description}</p>
        {/* Tech Stack Badges */}
        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techs.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="bg-purple-800/40 text-purple-200 text-xs px-2 py-1 rounded font-medium tracking-wide border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-xs shadow hover:from-purple-600 hover:to-cyan-600 transition-colors"
            >
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-800 text-white font-semibold text-xs border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
              Code
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.844c1.022.005 2.051.138 3.015.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.813 1.102.813 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
