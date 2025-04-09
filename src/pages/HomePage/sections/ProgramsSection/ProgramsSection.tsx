import { BookOpen, GraduationCap, Lightbulb, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

type ProgramProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const Program = ({ icon, title, description, color }: ProgramProps) => {
  return (
    <div className={`card group hover:border-l-4 ${color} transition-all duration-300`}>
      <div className={`${color.replace('border-l-', 'bg-')} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-4">{title}</h3>
      <p className="text-dark/80">{description}</p>
    </div>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      icon: <BookOpen size={28} className="text-primary" />,
      title: "Quality Education",
      description: "Our specially designed curriculum unlocks the potential of children living in remote villages and small towns.",
      color: "hover:border-l-primary"
    },
    {
      icon: <GraduationCap size={28} className="text-accent" />,
      title: "Higher Education Guidance",
      description: "We support students in pursuing advanced education opportunities through mentorship and resources.",
      color: "hover:border-l-accent"
    },
    {
      icon: <Lightbulb size={28} className="text-secondary-600" />,
      title: "Skill Development",
      description: "We enable families to become economically self-reliant through targeted skill development workshops.",
      color: "hover:border-l-secondary"
    },
    {
      icon: <Heart size={28} className="text-red-500" />,
      title: "Healthcare Awareness",
      description: "We integrate healthcare education into our programs to ensure holistic development and well-being.",
      color: "hover:border-l-red-500"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Programs</h2>
          <p className="max-w-2xl mx-auto text-lg text-dark/80">
            We've developed comprehensive programs that address the unique needs of 
            underprivileged communities and create sustainable pathways to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Program
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              color={program.color}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/our-work" className="btn-primary">
            Explore Our Initiatives
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;