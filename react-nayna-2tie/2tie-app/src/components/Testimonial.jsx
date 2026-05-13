import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="py-28 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Review Pelanggan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;