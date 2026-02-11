import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Git",
  "Responsive Design",
  "REST APIs"
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4 hero-title">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="badge skill-badge p-2 fs-6"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
