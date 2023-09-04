import Header from "@/elements/header";
import { FC } from "react";
import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import WhyChooseUs from "./components/why-choose-us";
import Certificates from "./components/certificates";

const HomePage: FC = () => {
  return (
    <section>
      <Header />
      <Banner />
      <AboutUs />
      <WhyChooseUs />
      <Certificates />
    </section>
  );
};

export default HomePage;
