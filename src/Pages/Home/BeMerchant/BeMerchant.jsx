import location from "../../../assets/location-merchant.png";
const BeMerchant = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-[#03373d] p-20 rounded-4xl bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={location} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary text-black rounded-full mr-4">
            Become A Merchant
          </button>
          <button className="btn btn-primary btn-outline text-primary rounded-full">
            Become A Merchant
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
