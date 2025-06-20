import image1 from "../../../assets/live-tracking.png";
import image2 from "../../../assets/safe-delivery.png";

const benefitsData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: image1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: image2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: image2,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-base-200 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
      </div>

      <div className="space-y-8">
        {benefitsData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden p-8"
          >
            {/* Left Image */}
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-36 object-cover"
              />
            </div>

            {/* Divider (horizontal on mobile, vertical on md+) */}
            <div className="hidden md:block h-28 mx-8  border-dashed border border-black/20" />
            <div className="block border border-black/20 border-dashed md:hidden h-px w-full bg-gray-300 my-4" />

            {/* Right Content */}
            <div className="flex-1 pr-4 text-center md:text-left">
              <h3 className="text-2xl text-[#056873] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
