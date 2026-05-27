const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-navy to-[#1A3A5F] text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-block bg-gold text-navy px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            BIDA Student (2026) | Aspiring Backend & Big Data Developer
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Theo Arnold Gaopalelwe
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Data Analytics • Python • SQL • Web Development • Cloud Fundamentals • Building 3 Apps
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-primary inline-block">
              View Projects
            </a>
            <a href="#contact" className="btn-outline inline-block">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
