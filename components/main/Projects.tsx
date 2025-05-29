import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <div className="relative flex items-center justify-center mb-10">
        <div className="absolute -top-[30%] left-[10%] right-[10%] h-[160%] bg-gradient-to-r from-purple-600/10 via-cyan-600/5 to-purple-600/10 rounded-full blur-3xl"></div>
        <h1 className="text-[40px] md:text-[50px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 py-8 relative z-10 text-center">
          <span className="relative inline-block">
            My <span className="text-white">Projects</span>
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-full"></span>
          </span>
        </h1>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/octupos.webp"
          title="AI Interviewer"
          description="An AI-powered Interviewer that can read and analyze the content of any web page, even if it's protected, and turn it into your personal knowledge assistant."
        />
        <ProjectCard
          src="/rizzAI.png"
          title="rizz AI"
          description="AN AI-powered chatbot that can answer questions and provide information on a wide range of topics."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Other Projects"
          description="Various full-stack applications demonstrating proficiency in JavaScript, React.js, Node.js, MongoDB, and other technologies from my technology stack."
        />
      </div>
    </div>
  );
};

export default Projects;
