import { FiBook, FiUsers, FiAward, FiBriefcase } from 'react-icons/fi';

function Features() {
  const features = [
    {
      icon: <FiBook size={24} />,
      title: "Structured Curriculum",
      description: "Industry-aligned courses designed by experts"
    },
    {
      icon: <FiUsers size={24} />,
      title: "Expert Teaching",
      description: "Learn from experienced professionals"
    },
    {
      icon: <FiAward size={24} />,
      title: "Practice Platform",
      description: "Thousands of problems to practice"
    },
    {
      icon: <FiBriefcase size={24} />,
      title: "Placement Support",
      description: "Get placed in top companies"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Why Choose Coding Ninjas?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;