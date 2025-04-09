import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type StoryProps = {
  name: string;
  age: number;
  location: string;
  image: string;
  quote: string;
  brief: string;
};

const stories: StoryProps[] = [
  {
    name: "Rajesh Kumar",
    age: 14,
    location: "Bihar",
    image: "https://images.unsplash.com/photo-1594751543129-6701ad444259",
    quote: "Education changed my life. Now I can dream of becoming a doctor.",
    brief: "From working in fields to pursuing medical aspirations, Rajesh's journey shows the transformative power of education."
  },
  {
    name: "Priya Singh",
    age: 12,
    location: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d",
    quote: "I never thought I would be able to read and write. Now I help my parents read their documents.",
    brief: "The first in her family to attend school, Priya has become a knowledge bridge for her entire household."
  },
  {
    name: "Arjun Mehra",
    age: 15,
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd",
    quote: "The skill development program helped my family start a small business.",
    brief: "Through our entrepreneurship training, Arjun's family established a sustainable income source."
  }
];

const StoryCard = ({ story }: { story: StoryProps }) => {
  return (
    <div className="card p-0 overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-2/5 h-64 md:h-auto">
        <img 
          src={story.image} 
          alt={story.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:w-3/5 flex flex-col">
        <div className="mb-4">
          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Success Story</span>
        </div>
        <blockquote className="text-xl font-heading italic mb-4 text-gray-700">&ldquo;{story.quote}&rdquo;</blockquote>
        <p className="text-dark/80 mb-4">{story.brief}</p>
        <div className="mt-auto">
          <p className="font-bold">{story.name}, {story.age}</p>
          <p className="text-sm text-gray-600">{story.location}</p>
        </div>
      </div>
    </div>
  );
};

const StoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Impact Stories</h2>
            <p className="max-w-2xl text-lg text-dark/80">
              Real stories of transformation and hope from the communities we serve.
            </p>
          </div>
          <Link to="/impact-stories" className="text-accent mt-4 md:mt-0 hover:text-accent-700 transition-colors duration-300 flex items-center">
            <span>View all stories</span>
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>

        <div className="relative">
          <StoryCard story={stories[currentIndex]} />
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevStory}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous story"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextStory}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next story"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;