const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition hover:bg-[#CAEB66] flex flex-col items-center text-center">
      <div className="text-[#049bac] text-4xl mb-4 p-4 rounded-full bg-linear-to-t from-slate-300 to-slate-50">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#049bac]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
