const Projects = () => {
  const projects = [
    {
      title: "Student Marks System",
      description: "Python application to add student marks, subjects, and calculate averages. Includes data validation and report generation.",
      tech: ["Python", "File I/O"],
      github: "#",
      demo: "#python-demo",
    },
    {
      title: "Enterprise & Student DB",
      description: "Designed relational databases using SQL with complex queries, joins, and aggregations for real-world scenarios.",
      tech: ["SQL", "Database Design"],
      github: "#",
    },
    {
      title: "Data Cleaning (Banks/Enterprises)",
      description: "Cleaned and transformed messy datasets – handled missing values, outliers, and standardized formats for analysis.",
      tech: ["Python", "Pandas", "Excel"],
      github: "#",
    },
    {
      title: "Interactive Dashboards",
      description: "Created business dashboards in Power BI and Excel visualizing KPIs, trends, and insights.",
      tech: ["Power BI", "Excel"],
      github: "#",
    },
    {
      title: "Multiple Websites",
      description: "Built responsive, modern websites showcasing frontend skills. Deployed and optimized.",
      tech: ["HTML/CSS/JS"],
      github: "#",
      live: "#",
    },
    {
      title: "3 Apps (In Development)",
      description: "Currently building three applications – focusing on backend integration, databases, and user-friendly interfaces.",
      tech: ["Full-stack", "Coming 2025"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github !== "#" && (
                    <a href={project.github} className="text-teal hover:text-gold font-semibold">
                      🔗 GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="text-teal hover:text-gold font-semibold">
                      🌐 Live Demo
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="text-teal hover:text-gold font-semibold">
                      🐍 Run Python
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
