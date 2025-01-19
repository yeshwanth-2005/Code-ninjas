import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Courses() {
  const courses = [
    {
      title: "Data Structures & Algorithms",
      image: "https://files.codingninjas.in/0000000000001270.png",
      level: "Beginner to Advanced",
      duration: "8 months",
      price: "₹17,999"
    },
    {
      title: "Web Development",
      image: "https://files.codingninjas.in/0000000000001289.png",
      level: "Beginner Friendly",
      duration: "6 months",
      price: "₹15,999"
    },
    {
      title: "Machine Learning",
      image: "https://files.codingninjas.in/0000000000001289.png",
      level: "Intermediate",
      duration: "7 months",
      price: "₹19,999"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Our Popular Courses
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <p>{course.level}</p>
                    <p>{course.duration}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{course.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Courses;