import ServiceCard from "./ServiceCard";
import { services } from "./ServicesData";

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#03373D] rounded-4xl my-20">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our Services
        </h2>
        <p className="text-gray-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
