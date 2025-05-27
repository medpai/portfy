import React from "react";
import EducationTimeline from "../ui/education-timeline";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative" id="education">
      <div className="relative flex items-center justify-center mb-10">
        <div className="absolute -top-[30%] left-[10%] right-[10%] h-[160%] bg-gradient-to-r from-purple-600/10 via-cyan-600/5 to-purple-600/10 rounded-full blur-3xl"></div>
        <h1 className="text-[40px] md:text-[50px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 py-8 relative z-10 text-center">
          <span className="relative inline-block">
            My <span className="text-white">Education</span>
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-full"></span>
          </span>
        </h1>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <EducationTimeline />
      </div>
    </div>
  );
};

export default Education;
