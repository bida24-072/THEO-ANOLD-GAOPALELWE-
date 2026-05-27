const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-light p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-navy mb-4">📫 Reach Out</h3>
            <div className="space-y-3">
              <a href="mailto:gaopalelwetheoanold@gmail.com" className="block text-teal hover:text-gold transition">
                📧 theo.anold.gaopalelwe
              </a>
              <a href="#" className="block text-teal hover:text-gold transition">
                🔗 LinkedIn: Theo Arnold Gaopalelwe
              </a>
              <a href="#" className="block text-teal hover:text-gold transition">
                💻 GitHub: @theoanoldgaopalelwe
              </a>
              <p className="text-gray-600 mt-4">📍 Gaborone, Botswana</p>
            </div>
          </div>
          <div className="bg-navy p-8 rounded-2xl shadow-md text-white">
            <h3 className="text-2xl font-bold text-gold mb-4">📄 What I'm Looking For</h3>
            <p className="mb-4">
              Internships, graduate roles, or collaborative projects in{" "}
              <strong>Backend Development, Data Analytics, or Big Data</strong>.
              Open to learning and building impactful solutions.
            </p>
            <a href="/resume.pdf" download="Theo_Anold_Gaopalelwe_Resume.pdf" className="btn-primary inline-block bg-gold text-navy">
              📄 Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
