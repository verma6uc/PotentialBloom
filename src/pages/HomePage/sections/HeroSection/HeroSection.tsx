import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-pattern py-16 md:py-24 text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
              Empowering Futures Through Education
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
              We provide quality education to underprivileged children in remote villages and towns, 
              empowering them and their families to become self-reliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-involved" className="btn-secondary flex items-center justify-center group">
                <span>Donate Now</span>
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/our-work" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-72 md:h-96 lg:h-[28rem] bg-white/10 rounded-xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-2 bg-[url('/hero-image.jpg')] bg-cover bg-center rounded-lg shadow-lg"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-lg shadow-lg transform rotate-3">
              <p className="text-dark font-bold text-lg">500+ Children</p>
              <p className="text-dark text-sm">Educated yearly</p>
            </div>
          </div>
        </div>
      </div>
      {/* Wave pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C62.1,2.62,125.14,15.23,186,29.26,230.1,40.63,274.64,53.76,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;