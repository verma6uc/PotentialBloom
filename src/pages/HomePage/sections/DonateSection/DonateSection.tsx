import { Link } from 'react-router-dom';
import { BookOpen, Utensils, Home, Heart } from 'lucide-react';

type DonationOptionProps = {
  icon: React.ReactNode;
  amount: string;
  description: string;
  primary?: boolean;
};

const DonationOption = ({ icon, amount, description, primary = false }: DonationOptionProps) => {
  return (
    <div 
      className={`card flex flex-col items-center text-center p-8 ${
        primary 
          ? 'border-2 border-primary scale-105 shadow-lg' 
          : 'hover:border border-gray-200'
      }`}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        primary ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
      }`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">₹{amount}</h3>
      <p className="text-dark/80 mb-6">{description}</p>
      <Link
        to="/get-involved"
        className={primary ? 'btn-primary w-full' : 'btn-outline w-full'}
      >
        Donate Now
      </Link>
    </div>
  );
};

const DonateSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Make a Difference Today</h2>
          <p className="max-w-2xl mx-auto text-lg text-dark/80">
            Your contribution can transform lives and communities by providing access to quality education, 
            skill development, and essential resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DonationOption 
            icon={<BookOpen size={28} />}
            amount="500"
            description="Provides educational materials for one child for a month"
          />
          <DonationOption 
            icon={<Utensils size={28} />}
            amount="1,000"
            description="Supplies nutritious meals for 5 children for a week"
          />
          <DonationOption 
            icon={<Home size={28} />}
            amount="2,500"
            description="Supports a family's skill development program"
            primary
          />
          <DonationOption 
            icon={<Heart size={28} />}
            amount="5,000"
            description="Funds healthcare initiatives for an entire village"
          />
        </div>

        <div className="bg-light rounded-xl p-8 mt-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Corporate Partnerships</h3>
              <p className="mb-4">
                Partner with us to create meaningful impact through Corporate Social Responsibility initiatives. 
                Our programs offer a transparent and effective way to contribute to education and community development.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Customized CSR programs aligned with your company values</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Regular impact reports and transparent fund utilization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Employee engagement opportunities through volunteering</span>
                </li>
              </ul>
              <Link to="/get-involved" className="btn-primary">
                Become a Partner
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-lg mb-4">
                "Our partnership with Srijan-ka-Sankalp has been incredibly rewarding. Their transparent approach 
                and meaningful impact metrics make them an ideal CSR partner."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Rahul Sharma</p>
                  <p className="text-sm text-gray-600">CSR Director, Tech Innovations Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;