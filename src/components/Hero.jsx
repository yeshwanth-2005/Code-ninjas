import { FiArrowRight } from 'react-icons/fi';

function Hero() {
  return (
    <section className="pt-24 pb-16 bg-light-orange">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Be a Coding Ninja
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn from top programmers and get placed in your dream company. Join our coding courses with highest in-industry success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 flex items-center justify-center">
                Explore Courses <FiArrowRight className="ml-2" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white">
                Try for Free
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://files.codingninjas.in/438375-17407.webp" 
              alt="Coding Ninjas Hero"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;