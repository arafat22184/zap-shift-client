import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ClientLogoSlider from "../ClientLogoSlider/ClientLogoSlider";
import Benefits from "../Benifits/Benifits";
import BeMerchant from "../BeMerchant/BeMerchant";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogoSlider></ClientLogoSlider>
      <Benefits></Benefits>
      <BeMerchant></BeMerchant>
    </div>
  );
};

export default Home;
