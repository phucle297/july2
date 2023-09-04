import Header from "@/elements/header";
import { FC } from "react";
import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import WhyChooseUs from "./components/why-choose-us";

const HomePage: FC = () => {
  return (
    <section>
      <Header />
      <Banner />
      <AboutUs />
      <WhyChooseUs />
    </section>
  );
};

export default HomePage;
