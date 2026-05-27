const Skills = () => {
  const skillCategories = [
    {
      title: "📊 Data & Analytics",
      skills: ["Python (Pandas)", "SQL (Advanced)", "Power BI", "Excel", "Data Cleaning", "Advanced Analytics"],
    },
    {
      title: "💻 Web & Backend",
      skills: ["HTML/CSS/JS", "Frontend Dev", "Backend (Learning)", "Database Design", "MS Access", "React (Learning)"],
    },
    {
      title: "☁️ Cloud & Big Data",
      skills: ["Cloud Modelling", "IaaS/PaaS/SaaS", "Big Data (Upcoming)", "ML (Next Goal)"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-teal mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
