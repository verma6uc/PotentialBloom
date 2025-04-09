import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Purpose</h2>
          <p className="max-w-2xl mx-auto text-lg text-dark/80">
            Driven by passionate professionals who have overcome their own challenges, 
            we're committed to creating lasting change through education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission Card */}
          <div className="card hover:border-l-4 hover:border-l-primary transition-all p-8 flex flex-col items-start">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Target size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
            <p className="text-dark/80 mb-4">
              To establish a sustainable governance model for Education, Skill Development 
              and Healthcare in towns and villages which lack academic infrastructure and 
              adequate facilities.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>Creating access to quality education in remote areas</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>Building skills for economic self-reliance</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>Implementing sustainable governance frameworks</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="card hover:border-l-4 hover:border-l-secondary transition-all p-8 flex flex-col items-start">
            <div className="bg-secondary/10 p-4 rounded-full mb-6">
              <Eye size={32} className="text-secondary-600" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
            <p className="text-dark/80 mb-4">
              "Srijan-ka-Sankalp" through its especially designed curriculum and unique academic modules 
              aspires to unlock the hidden potential of children and create a self sustaining society 
              by sharing wisdom and spreading the reach of education.
            </p>
            <p className="text-dark/80">
              Our vision is to create a literate and educated society and it can be realized 
              only by providing quality education and spreading awareness among the children 
              and their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;