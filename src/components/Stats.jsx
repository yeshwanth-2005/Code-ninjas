function Stats() {
  const stats = [
    { number: "15,000+", label: "Students Enrolled" },
    { number: "1,000+", label: "Successful Placements" },
    { number: "300+", label: "Hiring Partners" },
    { number: "12 LPA", label: "Average Package" }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;