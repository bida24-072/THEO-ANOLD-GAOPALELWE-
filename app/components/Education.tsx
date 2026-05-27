const Education = () => {
  return (
    <section id="education" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education & Journey</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-3">🎓 Botswana Accountancy College</h3>
            <p className="text-gray-700 mb-2">
              <strong>BIDA Degree</strong> (Business Intelligence & Data Analytics)
            </p>
            <p className="text-gray-600">Year 2 → Year 3 (Next Semester)</p>
            <p className="text-teal font-semibold mt-2">📚 Upcoming: Big Data Analytics module</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-3">☁️ Cloud & Advanced Analytics</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Cloud fundamentals (modelling, deployment concepts)</li>
              <li>✓ Advanced data analytics techniques</li>
              <li>🔜 Machine Learning (next learning goal)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
