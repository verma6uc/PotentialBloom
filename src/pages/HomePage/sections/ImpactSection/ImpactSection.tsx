import { useEffect, useState, useRef } from 'react';

type StatType = {
  value: number;
  label: string;
  suffix: string;
  increment: number;
};

const ImpactSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatType[] = [
    { value: 500, label: 'Children Educated', suffix: '+', increment: 5 },
    { value: 25, label: 'Villages Reached', suffix: '+', increment: 1 },
    { value: 95, label: 'Success Rate', suffix: '%', increment: 1 },
    { value: 150, label: 'Team Members', suffix: '+', increment: 2 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const intervalTime = 2000 / (stat.value / stat.increment);
            let count = 0;
            const interval = setInterval(() => {
              count += stat.increment;
              if (count >= stat.value) {
                count = stat.value;
                clearInterval(interval);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = count;
                return newCounters;
              });
            }, intervalTime);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, stats]);

  return (
    <section className="py-16 bg-accent text-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Impact</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            We're making a real difference in communities across India. These numbers 
            represent lives changed and futures brightened through education.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">
                {counters[index]}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;